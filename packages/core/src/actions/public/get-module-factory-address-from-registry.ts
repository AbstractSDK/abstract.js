import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAbstractModuleAddressFromRegistry } from './get-abstract-module-address-from-registry'
import { CommonModuleNames } from './types'

export type GetModuleFactoryAddressFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getModuleFactoryAddressFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetModuleFactoryAddressFromRegistryParameters) {
  return getAbstractModuleAddressFromRegistry({
    moduleName: CommonModuleNames.MODULE_FACTORY,
    cosmWasmClient,
    registryAddress,
    version,
  })
}
