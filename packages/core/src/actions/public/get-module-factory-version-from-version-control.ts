import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersionFromVersionControl,
} from './get-abstract-module-version-from-version-control'

export type GetModuleFactoryVersionFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getModuleFactoryVersionFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetModuleFactoryVersionFromVersionControlParameters) {
  return getAbstractModuleVersionFromVersionControl({
    args: {
      moduleName: CommonModuleNames.MODULE_FACTORY,
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })
}
