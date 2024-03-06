import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressFromVersionControl,
} from './get-abstract-module-address-from-version-control'

export type GetIbcClientAddressFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getIbcClientAddressFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetIbcClientAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    args: {
      moduleName: CommonModuleNames.IBC_CLIENT,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
