import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export async function getSubAccountSequences(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
  ...params: Parameters<typeof ManagerQueryClient.prototype.subAccountIds>
) {
  const managerQueryClient = await getManagerQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const { sub_accounts } = await managerQueryClient.subAccountIds(...params)

  return sub_accounts
}
