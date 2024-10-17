import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountQueryClient, RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetSubAccountSequencesParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Parameters<typeof AccountQueryClient.prototype.subAccountIds>[0]

export async function getSubAccountSequences({
  accountId,
  cosmWasmClient,
  apiUrl,
  ...params
}: GetSubAccountSequencesParameters) {
  const accountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { sub_accounts } = await accountQueryClient.subAccountIds(params)

  return sub_accounts
}
