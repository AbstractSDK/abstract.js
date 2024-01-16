import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export async function getModuleAddress(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
  ...params: Parameters<typeof ManagerQueryClient.prototype.moduleAddresses>
) {
  const managerQueryClient = await getManagerQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const { modules } = await managerQueryClient.moduleAddresses(...params)

  return modules[0]?.[1] ?? null
}
