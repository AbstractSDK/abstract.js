import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressFromVersionControl,
} from './get-abstract-module-address-from-version-control'

export type GetAccountFactoryAddressFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getAccountFactoryAddressFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAccountFactoryAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ACCOUNT_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
