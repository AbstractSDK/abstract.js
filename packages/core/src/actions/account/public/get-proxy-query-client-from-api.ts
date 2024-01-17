import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyQueryClient } from '../../public/get-proxy-query-client'
import { getAccountBaseAddressesFromApi } from './get-account-base-addresses-from-api'

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
