import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export async function getModules(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
  ...params: Parameters<typeof ManagerQueryClient.prototype.moduleInfos>
) {
  const managerQueryClient = await getManagerQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const { module_infos: modules } = await managerQueryClient.moduleInfos(
    ...params,
  )

  return modules
}
