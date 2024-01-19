import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { sequenceToLocalAccountId } from '../../../utils/account-id/seq-to-local-account-id'
import { chainIdToName } from '../../../utils/chain-registry'
import { getSubAccountSequences } from './get-sub-account-sequences'

export type GetSubAccountIdsParameters = WithArgs<
  {
    accountId: VersionControlTypes.AccountId
    cosmWasmClient: CosmWasmClient
    apiUrl: string
  } & Parameters<typeof ManagerQueryClient.prototype.subAccountIds>[0]
>

export async function getSubAccountIds({
  args: { accountId, cosmWasmClient, apiUrl, ...params },
}: GetSubAccountIdsParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const sub_accounts = await getSubAccountSequences({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
      ...params,
    },
  })

  return sub_accounts.map((sequence) =>
    sequenceToLocalAccountId({ chainName, sequence }),
  )
}
