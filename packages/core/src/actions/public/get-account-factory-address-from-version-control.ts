import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { CommonModuleNames } from './types'

export type GetAccountFactoryAddressFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getAccountFactoryAddressFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAccountFactoryAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    moduleName: CommonModuleNames.ACCOUNT_FACTORY,
    cosmWasmClient,
    versionControlAddress,
    version,
  })
}
