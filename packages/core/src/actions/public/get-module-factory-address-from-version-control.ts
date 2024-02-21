import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressFromVersionControl,
} from './get-abstract-module-address-from-version-control'

export type GetModuleFactoryAddressFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getModuleFactoryAddressFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetModuleFactoryAddressFromVersionControlParameters) {
  return getAbstractModuleAddressFromVersionControl({
    args: {
      moduleName: CommonModuleNames.MODULE_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
