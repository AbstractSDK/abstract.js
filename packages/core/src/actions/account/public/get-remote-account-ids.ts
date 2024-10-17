import {
  AccountId,
  chainIdToName,
  hostChainNameToName,
} from '@abstract-money/core'
import {
  GetRemoteAccountsParameters,
  getRemoteAccounts,
} from './get-remote-accounts'

export type GetRemoteAccountIdsParameters = GetRemoteAccountsParameters

/**
 * Get the Account's remote Account ids.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getRemoteAccountIds({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetRemoteAccountIdsParameters): Promise<AccountId[]> {
  const remoteAccountAddrs = await getRemoteAccounts({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  console.log('remote account ids: addresses', remoteAccountAddrs)

  const chainId = await cosmWasmClient.getChainId()
  const sourceChainName = chainIdToName(chainId)

  return Object.keys(remoteAccountAddrs).map((hostChainName) => {
    // local accounts are now remote accounts, remote accounts are now one hop further
    const remoteTrace =
      accountId.trace === 'local'
        ? [sourceChainName]
        : accountId.trace.remote.concat(sourceChainName)

    const remoteChainName = hostChainNameToName(hostChainName)

    return {
      seq: accountId.seq,
      trace: { remote: remoteTrace },
      chainName: remoteChainName,
    } satisfies AccountId
  })
}
