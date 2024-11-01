import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromRegistry } from './get-abstract-module-address-from-registry'
import { CommonModuleNames } from './types'

export type GetIcaClientAddressFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getIcaClientAddressFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetIcaClientAddressFromRegistryParameters) {
  return getAbstractModuleAddressFromRegistry({
    moduleName: CommonModuleNames.ICA_CLIENT,
    cosmWasmClient,
    registryAddress,
    version,
  })
}
