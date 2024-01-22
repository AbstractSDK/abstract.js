import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetSubAccountSequencesParameters = WithArgs<
  {
    accountId: VersionControlTypes.AccountId
    cosmWasmClient: CosmWasmClient
    apiUrl: string
  } & Parameters<typeof ManagerQueryClient.prototype.subAccountIds>[0]
>

export async function getSubAccountSequences({
  args: { accountId, cosmWasmClient, apiUrl, ...params },
}: GetSubAccountSequencesParameters) {
  const managerQueryClient = await getManagerQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  const { sub_accounts } = await managerQueryClient.subAccountIds(params)

  return sub_accounts
}
