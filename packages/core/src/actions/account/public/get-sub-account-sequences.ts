import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetSubAccountSequencesParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof ManagerQueryClient.prototype.subAccountIds>[0]

export async function getSubAccountSequences({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetSubAccountSequencesParameters) {
  const managerQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { sub_accounts } = await managerQueryClient.subAccountIds(params)

  return sub_accounts
}
