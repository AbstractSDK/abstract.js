import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleAddressAndVersionFromVersionControl,
} from './get-abstract-module-address-and-version-from-version-control'

export type GetModuleFactoryAddressAndVersionFromVersionControlParameters =
  WithArgs<{
    cosmWasmClient: CosmWasmClient
    versionControlAddress: string
    version?: string
  }>
export async function getModuleFactoryAddressAndVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetModuleFactoryAddressAndVersionFromVersionControlParameters) {
  return getAbstractModuleAddressAndVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.MODULE_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
