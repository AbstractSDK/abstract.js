import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { CommonModuleNames } from './types'

export type GetAnsHostAddressFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}

export async function getAnsHostAddressFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAnsHostAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    moduleName: CommonModuleNames.ANS_HOST,
    cosmWasmClient,
    versionControlAddress,
    version,
  })
}
