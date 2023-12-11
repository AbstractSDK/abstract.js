import { camelCase } from 'change-case'

import type { ContractConfig } from '../config'
import { fetch } from './fetch'

type RegistryContract = Omit<ContractConfig, 'path'> & {
  version: string
  namespace: string
}

export type RegistryConfig = {
  /**
   * Duration in milliseconds to cache schemas.
   *
   * @default 1_800_000 // 30m in ms
   */
  cacheDuration?: number
  /**
   * Contracts to fetch schemas for.
   */
  contracts: RegistryContract[]
  /**
   * Name of source.
   */
  name?: ContractConfig['name']
}

const SCHEMA_REGISTRY_GITHUB_URL =
  'https://raw.githubusercontent.com/AbstractSDK/schemas/mainline'

/**
 * Fetches contract schemas from the schemas registry located at https://github.com/AbstractSDK/schemas/tree/mainline
 */
export function registry({
  cacheDuration,
  contracts,
  name = 'Registry',
}: RegistryConfig) {
  return fetch<RegistryContract>({
    cacheDuration,
    contracts,
    name,
    getCacheKey({ contract }) {
      // TODO: Figure out how to properly handle namespace-name collisions.
      return `${camelCase(name)}:${contract.name}`
    },
    async parse({ response }) {
      if (response.status !== 200) throw new Error('Schema not found')
      return response.json()
    },
    request({ name, namespace, version }) {
      if (!name) throw new Error('name is required')
      if (!version) throw new Error('version is required')
      if (!namespace) throw new Error('namespace is required')
      return {
        url: `${SCHEMA_REGISTRY_GITHUB_URL}/${namespace}/${name}/${version}/module-schema.json`,
      }
    },
  })
}
