import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getIbcClientQueryClientFromManager } from './get-ibc-client-query-client-from-manager'

export type GetRemoteProxiesParameters = WithArgs<
  {
    accountId: VersionControlTypes.AccountId
    cosmWasmClient: CosmWasmClient
    apiUrl: string
  } & Omit<
    Parameters<
      typeof IbcClientQueryClient.prototype.listRemoteProxiesByAccountId
    >[0],
    'accountId'
  >
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
  args: { accountId, cosmWasmClient, apiUrl },
}: GetRemoteProxiesParameters): Promise<Record<ChainName, MaybeProxyAddress>> {
  let ibcClient: IbcClientQueryClient
  try {
    ibcClient = await getIbcClientQueryClientFromManager({
      args: { accountId, cosmWasmClient, apiUrl },
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
