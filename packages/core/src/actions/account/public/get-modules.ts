import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  AccountQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModulesParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof AccountQueryClient.prototype.moduleInfos>[0]

export async function getModules({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetModulesParameters) {
  const AccountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { module_infos: modules } = await AccountQueryClient.moduleInfos(params)

  return modules
}
