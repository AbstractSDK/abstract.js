import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressAndVersionFromVersionControl,
} from './get-abstract-module-address-and-version-from-version-control'

export type GetAnsHostAddressAndVersionFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAnsHostAddressAndVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAnsHostAddressAndVersionFromVersionControlParameters) {
  return getAbstractModuleAddressAndVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ANS_HOST,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
