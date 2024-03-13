import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { CommonModuleNames } from './types'

export type GetModuleFactoryAddressFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getModuleFactoryAddressFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetModuleFactoryAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    moduleName: CommonModuleNames.MODULE_FACTORY,
    cosmWasmClient,
    versionControlAddress,
    version,
  })
}
