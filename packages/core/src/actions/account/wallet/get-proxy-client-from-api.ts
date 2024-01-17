import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyClient } from '../../wallet/get-proxy-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export async function getProxyClientFromApi(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )

  return getProxyClient(signingCosmWasmClient, sender, proxyAddress)
}
