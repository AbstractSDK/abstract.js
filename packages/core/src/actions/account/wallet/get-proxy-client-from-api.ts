import { WithArgs } from '../../../types/with-args'
import { getProxyClient } from '../../wallet/get-proxy-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseWalletParameters } from './types'

export type GetProxyClientFromApiParameters = WithArgs<BaseWalletParameters>

export async function getProxyClientFromApi({
  args: { accountId, signingCosmWasmClient, sender, apiUrl },
}: GetProxyClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })

  return getProxyClient({
    args: { signingCosmWasmClient, sender, proxyAddress },
  })
}
