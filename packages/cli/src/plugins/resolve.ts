import { default as fse } from 'fs-extra'
import type { RequestInfo, RequestInit, Response } from 'node-fetch'
import { AbortError, default as fetch } from 'node-fetch'
import { join } from 'pathe'

import { homedir } from 'os'
import type { ContractConfig, ContractVersion, Plugin } from '../config'
import type { MaybeArray, RequiredBy } from '../types'
import { fixSchemaResultOfError } from '../utils/fix-schema-result-of-error'
import { RegistrySchemaNotFoundError } from './registry'

export type ResolveConfig<
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
    | Promise<MaybeArray<{ url: RequestInfo; init?: RequestInit }>>
    | MaybeArray<{ url: RequestInfo; init?: RequestInit }>

  /**
   * Duration in milliseconds before request times out.
   *
   * @default 5_000 // 5s in ms
   */
  timeoutDuration?: number
}

type ResolveResult = RequiredBy<Plugin, 'contracts'>

/**
 * Resolvees and parses contract schemas from network resource with `fetch`.
 */
export function resolve<
  TContract extends Omit<ContractConfig, 'path'> = Omit<ContractConfig, 'path'>,
>({
  cacheDuration = 1_800_000,
  contracts: contractConfigs,
  getCacheKey,
  name = 'Resolve',
  parse = ({ response }) => response.json(),
  request,
  timeoutDuration = 5_000,
}: ResolveConfig<TContract>): ResolveResult {
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

        let path: string | undefined
        if (cacheTimestamp > Date.now()) path = cacheFolderPath
        else {
          const AbortController =
            globalThis.AbortController ||
            (await import('abort-controller')).default

          const requestsArgumentsMaybeArray = await request(contract)
          const requestArguments = Array.isArray(requestsArgumentsMaybeArray)
            ? requestsArgumentsMaybeArray
            : [requestsArgumentsMaybeArray]

          for (let i = 0; i < requestArguments.length; ++i) {
            // safe assertion because we are iterating over the length of requestArguments
            const { url, init } = requestArguments[i]!

            const controller = new AbortController()
            const timeout = setTimeout(
              () => controller.abort(),
              timeoutDuration,
            )
            try {
              const response = await fetch(url, {
                ...init,
                // TODO: Use `AbortSignal.timeout` when Node 18 is more widely used.
                signal: controller.signal,
              })
              const schema = await parse({ response })
              // HACK: Replaces the undescored `Result_of` to be PascalCased as
              // it raises an error that is pretty complex to debug. Needs to be deleted later.
              const schemaString = fixSchemaResultOfError(
                JSON.stringify(schema, null, 2),
              )
              await fse.writeFile(cacheFilePath, schemaString)
              path = cacheFolderPath
              await fse.writeFile(
                cacheFileTimestampPath,
                timestamp.toString(),
                {
                  encoding: 'utf8',
                },
              )
              // If request was successful, leave the loop.
              break
            } catch (error) {
              // If request was aborted, skip to next request,
              // yet if it's the last one, throw error.
              if (
                !(
                  error instanceof AbortError ||
                  error instanceof RegistrySchemaNotFoundError
                )
              ) {
                // Attempt to check cache if fetch fails.
                const cacheExists = await fse.pathExists(cacheFilePath)
                if (!cacheExists) throw error
              } else if (i === requestArguments.length - 1) {
                throw new Error('All requests have timed out')
              }
            } finally {
              clearTimeout(timeout)
            }
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
