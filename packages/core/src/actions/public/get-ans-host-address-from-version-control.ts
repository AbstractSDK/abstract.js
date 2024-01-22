import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressFromVersionControl,
} from './get-abstract-module-address-from-version-control'

export type GetAnsHostAddressFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAnsHostAddressFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAnsHostAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ANS_HOST,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
