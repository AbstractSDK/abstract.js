import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from '../../types/with-args'
import {
  CommonModuleNames,
  getAbstractModuleVersion,
} from './get-abstract-module-version'

export type GetAnsHostVersionParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}>

export async function getAnsHostVersion({
  args: { cosmWasmClient, apiUrl, version },
}: GetAnsHostVersionParameters) {
  return getAbstractModuleVersion({
    args: {
      moduleName: CommonModuleNames.ANS_HOST,
      cosmWasmClient,
      apiUrl,
      version,
    },
  })
}
