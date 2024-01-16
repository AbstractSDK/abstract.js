import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { sequenceToLocalAccountId } from 'src/utils/account-id/seq-to-local-account-id'
import { chainIdToName } from 'src/utils/chain-registry'
import { getSubAccountSequences } from './get-sub-account-sequences'

export async function getSubAccountIds(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
  ...params: Parameters<typeof ManagerQueryClient.prototype.subAccountIds>
) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const sub_accounts = await getSubAccountSequences(
    accountId,
    cosmWasmClient,
    apiUrl,
    ...params,
  )

  return sub_accounts.map((sequence) =>
    sequenceToLocalAccountId({ chainName, sequence }),
  )
}
