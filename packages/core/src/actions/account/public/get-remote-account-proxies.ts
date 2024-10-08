import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { IbcClientQueryClient, RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id/account-id-to-parameter'
import { getIbcClientQueryClientFromManager } from './get-ibc-client-query-client-from-manager'

export type GetRemoteProxiesParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
} & Omit<
  Parameters<
    typeof IbcClientQueryClient.prototype.listRemoteProxiesByAccountId
  >[0],
  'accountId'
>

type ChainName = string
type MaybeProxyAddress = string | null

/**
 * Get the remote proxies for the given account.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getRemoteAccountProxies({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetRemoteProxiesParameters): Promise<Record<ChainName, MaybeProxyAddress>> {
  let ibcClient: IbcClientQueryClient
  try {
    ibcClient = await getIbcClientQueryClientFromManager({
      accountId,
      cosmWasmClient,
      apiUrl,
    })
  } catch (e) {
    console.log('remoteProxies error', e)
    // IBC client not installed
    return {}
  }

  const remoteProxies = await ibcClient.listRemoteProxiesByAccountId({
    accountId: accountIdToParameter(accountId),
  })

  return Object.fromEntries(remoteProxies.proxies)
}
