import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

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
  const managerQueryClient = await getManagerQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { module_infos: modules } = await managerQueryClient.moduleInfos(params)

  return modules
}
