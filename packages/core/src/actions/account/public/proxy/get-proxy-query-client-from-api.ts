import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../get-account-base-addresses-from-api'

export async function getProxyQueryClientFromApi(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )

  return new ProxyQueryClient(cosmWasmClient, proxyAddress)
}
