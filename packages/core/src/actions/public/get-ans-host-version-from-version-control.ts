import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersionFromVersionControl,
} from './get-abstract-module-version-from-version-control'

export type GetAnsHostVersionFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAnsHostVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAnsHostVersionFromVersionControlParameters) {
  return getAbstractModuleVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ANS_HOST,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
