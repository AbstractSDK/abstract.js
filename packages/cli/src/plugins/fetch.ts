import { default as fse } from 'fs-extra'
import type { RequestInfo, RequestInit, Response } from 'node-fetch'
import { default as fetch_ } from 'node-fetch'
import { join } from 'pathe'

import { homedir } from 'os'
import type { ContractConfig, ContractVersion, Plugin } from '../config'
import type { RequiredBy } from '../types'

export type FetchConfig<
  TContract extends Omit<ContractConfig, 'path'> = Omit<ContractConfig, 'path'>,
> = {
  /**
   * Duration in milliseconds to cache schemas from request.
   *
   * @default 1_800_000 // 30m in ms
   */
  cacheDuration?: number
  /**
   * Contracts to fetch schemas for.
   */
  contracts: TContract[]
  /**
   * Function for creating a cache key for contract.
   */
  getCacheKey(config: {
    contract: TContract
  }): `${string}:${string}:${string}:${ContractVersion}`
  /**
   * Name of source.
   */
  name?: TContract['name']
  /**
   * Function for parsing schema from fetch response.
   *
   * @default ({ response }) => response.json()
   */
  parse?({
    response,
  }: {
    response: Response
  }): Promise<unknown>
  /**
   * Function for returning a request to fetch schema from.
   */
  request(
    config: Partial<TContract>,
  ):
    | Promise<{ url: RequestInfo; init?: RequestInit }>
    | { url: RequestInfo; init?: RequestInit }

  /**
   * Duration in milliseconds before request times out.
   *
   * @default 5_000 // 5s in ms
   */
  timeoutDuration?: number
}

type FetchResult = RequiredBy<Plugin, 'contracts'>

/**
 * Fetches and parses contract schemas from network resource with `fetch`.
 */
export function fetch<
  TContract extends Omit<ContractConfig, 'path'> = Omit<ContractConfig, 'path'>,
>({
  cacheDuration = 1_800_000,
  contracts: contractConfigs,
  getCacheKey,
  name = 'Fetch',
  parse = ({ response }) => response.json(),
  request,
  timeoutDuration = 5_000,
}: FetchConfig<TContract>): FetchResult {
  return {
    async contracts() {
      const cacheDir = join(homedir(), '.abstract-cli/plugins/fetch/cache')
      await fse.ensureDir(cacheDir)

      const timestamp = Date.now() + cacheDuration
      const contracts = []
      for (const contract of contractConfigs) {
        const cacheKey = getCacheKey({ contract })
        const cacheFolderPath = join(cacheDir, cacheKey)
        await fse.ensureDir(cacheFolderPath)
        const cacheFilePath = join(cacheFolderPath, 'module-schema.json')
        const cacheFileTimestampPath = join(cacheFolderPath, '.timestamp')
        const cacheTimestamp = parseInt(
          await fse.readFile(cacheFileTimestampPath, 'utf8').catch(() => '0'),
          10,
        )

        let path
        if (cacheTimestamp > Date.now()) path = cacheFolderPath
        else {
          const AbortController =
            globalThis.AbortController ||
            (await import('abort-controller')).default
          const controller = new AbortController()
          const timeout = setTimeout(() => controller.abort(), timeoutDuration)
          try {
            const { url, init } = await request(contract)
            // TODO: Replace `node-fetch` with native `fetch` when Node 18 is more widely used.
            const response = await fetch_(url, {
              ...init,
              // TODO: Use `AbortSignal.timeout` when Node 18 is more widely used.
              signal: controller.signal,
            })
            const schema = await parse({ response })
            await fse.writeJSON(cacheFilePath, schema)
            path = cacheFolderPath
            await fse.writeFile(cacheFileTimestampPath, timestamp, {
              encoding: 'utf8',
            })
          } catch (error) {
            // Attempt to check cache if fetch fails.
            const cacheExists = await fse.pathExists(cacheFilePath)
            if (!cacheExists) throw error
          } finally {
            clearTimeout(timeout)
          }
        }

        const [_pluginName, namespace, _name, version] = cacheKey.split(
          ':',
        ) as [string, string, string, ContractVersion]

        contracts.push({
          path: path!,
          name: contract.name,
          version,
          namespace,
        })
      }
      return contracts
    },
    name,
  }
}
