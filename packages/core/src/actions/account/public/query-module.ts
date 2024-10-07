import { ContractMsg } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ModuleType, wrapModuleQueryMsg } from 'src/utils/modules'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getModuleAddress } from './get-module-address'

export type QueryModuleParameters<
  TModuleMsg extends ContractMsg = ContractMsg,
> = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & {
  moduleId: string
  moduleType?: ModuleType
  queryMsg: TModuleMsg
}

export async function queryModule<
  TModuleMsg extends ContractMsg = ContractMsg,
>({
  accountId,
  cosmWasmClient,
  apiUrl,
  moduleId,
  moduleType,
  queryMsg,
}: QueryModuleParameters<TModuleMsg>): Promise<ContractMsg> {
  const moduleQueryMsg = wrapModuleQueryMsg<TModuleMsg>(queryMsg, moduleType)

  const moduleAddress = await getModuleAddress({
    accountId,
    cosmWasmClient,
    apiUrl,
    id: moduleId,
  })
  if (!moduleAddress) {
    throw new Error(`${moduleId} not installed`)
  }

  return await cosmWasmClient.queryContractSmart(moduleAddress, moduleQueryMsg)
}
