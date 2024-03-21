import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { CommonModuleNames } from './types'

export type GetIbcClientAddressFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getIbcClientAddressFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetIbcClientAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    moduleName: CommonModuleNames.IBC_CLIENT,
    cosmWasmClient,
    versionControlAddress,
    version,
  })
}
