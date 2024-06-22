import { getProxyClient } from '../../wallet/get-proxy-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseAccountWalletParameters } from './types'

export type GetProxyClientFromApiParameters = BaseAccountWalletParameters

export async function getProxyClientFromApi({
  accountId,
  signingCosmWasmClient,
  sender,
  apiUrl,
}: GetProxyClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  return getProxyClient({
    signingCosmWasmClient,
    sender,
    proxyAddress,
  })
}
