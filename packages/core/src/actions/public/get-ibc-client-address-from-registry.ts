import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromRegistry } from './get-abstract-module-address-from-registry'
import { CommonModuleNames } from './types'

export type GetIbcClientAddressFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getIbcClientAddressFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetIbcClientAddressFromRegistryParameters) {
  return getAbstractModuleAddressFromRegistry({
    moduleName: CommonModuleNames.IBC_CLIENT,
    cosmWasmClient,
    registryAddress,
    version,
  })
}
