import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersionFromVersionControl,
} from './get-abstract-module-version-from-version-control'

export type GetAccountFactoryVersionFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getAccountFactoryVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAccountFactoryVersionFromVersionControlParameters) {
  return getAbstractModuleVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ACCOUNT_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
