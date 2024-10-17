import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromRegistry } from './get-abstract-module-address-from-registry'
import { CommonModuleNames } from './types'

export type GetIbcHostAddressFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getIbcHostAddressFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetIbcHostAddressFromRegistryParameters) {
  return getAbstractModuleAddressFromRegistry({
    moduleName: CommonModuleNames.IBC_HOST,
    cosmWasmClient,
    registryAddress,
    version,
  })
}
