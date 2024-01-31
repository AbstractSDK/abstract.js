import { AccountId } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getIbcClientQueryClientFromManager } from './get-ibc-client-query-client-from-manager'
import {
  GetRemoteProxiesParameters,
  getRemoteAccountProxies,
} from './get-remote-account-proxies'

export type GetRemoteAccountIdsParameters = GetRemoteProxiesParameters

/**
 * Get the Account's remote Account ids.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getRemoteAccountIds({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetRemoteAccountIdsParameters): Promise<AccountId[]> {
  const remoteProxies = await getRemoteAccountProxies({
    args: { accountId, cosmWasmClient, apiUrl },
  })

  return Object.keys(remoteProxies).map((chainName) => {
    // local accounts are now remote accounts, remote accounts are now one hop further
    const remoteTrace =
      accountId.trace === 'local'
        ? [chainName]
        : accountId.trace.remote.concat(chainName)
    return {
      seq: accountId.seq,
      trace: { remote: remoteTrace },
      chainName,
    } satisfies AccountId
  })
}
