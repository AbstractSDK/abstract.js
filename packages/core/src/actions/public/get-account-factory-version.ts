import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAbstractModuleVersion } from './get-abstract-module-version'
import { CommonModuleNames } from './types'

export type GetAccountFactoryVersionParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}
export async function getAccountFactoryVersion({
  cosmWasmClient,
  apiUrl,
  version,
}: GetAccountFactoryVersionParameters) {
  return getAbstractModuleVersion({
    apiUrl,
    moduleName: CommonModuleNames.ACCOUNT_FACTORY,
    cosmWasmClient,
    version,
  })
}
