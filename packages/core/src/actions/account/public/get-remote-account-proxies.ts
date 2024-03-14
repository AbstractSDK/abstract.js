import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getIbcClientQueryClientFromManager } from './get-ibc-client-query-client-from-manager'

export type GetRemoteProxiesParameters = {
  accountId: VersionControlTypes.AccountId
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
    // IBC client not installed
    return {}
  }

  const remoteProxies = await ibcClient.listRemoteProxiesByAccountId({
    accountId,
  })

  return Object.fromEntries(remoteProxies.proxies)
}
