import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountQueryClient, RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModulesParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof AccountQueryClient.prototype.moduleInfos>[0]

export async function getModules({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetModulesParameters) {
  const accountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { module_infos: modules } = await accountQueryClient.moduleInfos(params)

  return modules
}
