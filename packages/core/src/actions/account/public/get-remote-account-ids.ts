import { AccountId, chainIdToName } from '@abstract-money/core'
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
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetRemoteAccountIdsParameters): Promise<AccountId[]> {
  const remoteProxies = await getRemoteAccountProxies({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  console.log('remote account ids: proxies', remoteProxies)

  const chainId = await cosmWasmClient.getChainId()
  const sourceChainName = chainIdToName(chainId)

  return Object.keys(remoteProxies).map((remoteChainName) => {
    // local accounts are now remote accounts, remote accounts are now one hop further
    const remoteTrace =
      accountId.trace === 'local'
        ? [sourceChainName]
        : accountId.trace.remote.concat(sourceChainName)

    return {
      seq: accountId.seq,
      trace: { remote: remoteTrace },
      chainName: remoteChainName,
    } satisfies AccountId
  })
}
