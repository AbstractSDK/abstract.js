import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersion,
} from './get-abstract-module-version'

export type GetAccountFactoryVersionParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}>
export async function getAccountFactoryVersion({
  args: { cosmWasmClient, apiUrl, version },
}: GetAccountFactoryVersionParameters) {
  return getAbstractModuleVersion({
    args: {
      apiUrl,
      moduleName: CommonModuleNames.ACCOUNT_FACTORY,
      cosmWasmClient,
      version,
    },
  })
}
