import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { IbcClientQueryClient, RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id/account-id-to-parameter'
import { getIbcClientQueryClientFromAccount } from './get-ibc-client-query-client-from-account'

export type GetRemoteAccountsParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Omit<
  Parameters<
    typeof IbcClientQueryClient.prototype.listRemoteAccountsByAccountId
  >[0],
  'accountId'
>

type ChainName = string
type MaybeProxyAddress = string | null

/**
 * Get the remote accounts for the given account.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getRemoteAccounts({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetRemoteAccountsParameters): Promise<Record<ChainName, MaybeProxyAddress>> {
  let ibcClient: IbcClientQueryClient
  try {
    ibcClient = await getIbcClientQueryClientFromAccount({
      accountId,
      cosmWasmClient,
      apiUrl,
    })
  } catch (e) {
    console.log('remoteAccounts error', e)
    // IBC client not installed
    return {}
  }

  const remoteAccounts = await ibcClient.listRemoteAccountsByAccountId({
    accountId: accountIdToParameter(accountId),
  })

  return Object.fromEntries(remoteAccounts.accounts)
}
