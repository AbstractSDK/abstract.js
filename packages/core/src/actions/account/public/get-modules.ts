import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModulesParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof ManagerQueryClient.prototype.moduleInfos>[0]

export async function getModules({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetModulesParameters) {
  const managerQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { module_infos: modules } = await managerQueryClient.moduleInfos(params)

  return modules
}
