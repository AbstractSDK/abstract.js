import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersion,
} from './get-abstract-module-version'

export type GetModuleFactoryVersionParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}>
export async function getModuleFactoryVersion({
  args: { cosmWasmClient, apiUrl, version },
}: GetModuleFactoryVersionParameters) {
  return getAbstractModuleVersion({
    args: {
      moduleName: CommonModuleNames.MODULE_FACTORY,
      cosmWasmClient,
      apiUrl,
      version,
    },
  })
}
