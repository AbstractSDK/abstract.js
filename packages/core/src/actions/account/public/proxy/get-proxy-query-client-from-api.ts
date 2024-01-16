import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getProxyQueryClient } from 'src/actions/public/proxy/get-proxy-query-client'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../version-control/get-account-base-addresses-from-api'

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

  return getProxyQueryClient(cosmWasmClient, proxyAddress)
}
