import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAbstractModuleVersion } from './get-abstract-module-version'
import { CommonModuleNames } from './types'

export type GetModuleFactoryVersionParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}
export async function getModuleFactoryVersion({
  cosmWasmClient,
  apiUrl,
  version,
}: GetModuleFactoryVersionParameters) {
  return getAbstractModuleVersion({
    moduleName: CommonModuleNames.MODULE_FACTORY,
    cosmWasmClient,
    apiUrl,
    version,
  })
}
