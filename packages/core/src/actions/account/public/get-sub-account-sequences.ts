import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  AccountQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetSubAccountSequencesParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof AccountQueryClient.prototype.subAccountIds>[0]

export async function getSubAccountSequences({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetSubAccountSequencesParameters) {
  const AccountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { sub_accounts } = await AccountQueryClient.subAccountIds(params)

  return sub_accounts
}
