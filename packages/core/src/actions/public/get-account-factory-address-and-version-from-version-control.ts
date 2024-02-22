import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressAndVersionFromVersionControl,
} from './get-abstract-module-address-and-version-from-version-control'

export type GetAccountFactoryAddressAndVersionFromVersionControlParameters =
  WithArgs<{
    cosmWasmClient: CosmWasmClient
    versionControlAddress: string
    version?: string
  }>
export async function getAccountFactoryAddressAndVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAccountFactoryAddressAndVersionFromVersionControlParameters) {
  return getAbstractModuleAddressAndVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.ACCOUNT_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
