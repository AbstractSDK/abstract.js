import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromRegistry } from './get-abstract-module-address-from-registry'
import { CommonModuleNames } from './types'

export type GetAnsHostAddressFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}

export async function getAnsHostAddressFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetAnsHostAddressFromRegistryParameters) {
  return getAbstractModuleAddressFromRegistry({
    moduleName: CommonModuleNames.ANS_HOST,
    cosmWasmClient,
    registryAddress,
    version,
  })
}
