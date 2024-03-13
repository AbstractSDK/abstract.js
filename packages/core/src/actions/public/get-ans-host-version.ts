import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleVersion } from './get-abstract-module-version'
import { CommonModuleNames } from './types'

export type GetAnsHostVersionParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  version?: string
}

export async function getAnsHostVersion({
  cosmWasmClient,
  apiUrl,
  version,
}: GetAnsHostVersionParameters) {
  return getAbstractModuleVersion({
    moduleName: CommonModuleNames.ANS_HOST,
    cosmWasmClient,
    apiUrl,
    version,
  })
}
