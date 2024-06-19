import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { CommonModuleNames } from './types'

export type GetIbcHostAddressFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getIbcHostAddressFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetIbcHostAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    moduleName: CommonModuleNames.IBC_HOST,
    cosmWasmClient,
    versionControlAddress,
    version,
  })
}
