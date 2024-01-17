import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getProxyClient } from 'src/actions/wallet/proxy/get-proxy-client'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../../public/version-control/get-account-base-addresses-from-api'

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
