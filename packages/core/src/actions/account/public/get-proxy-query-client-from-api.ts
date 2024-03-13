import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyQueryClient } from '../../public/get-proxy-query-client'
import { getAccountBaseAddressesFromApi } from './get-account-base-addresses-from-api'

export type GetProxyQueryClientFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getProxyQueryClientFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetProxyQueryClientFromApiParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  return getProxyQueryClient({ cosmWasmClient, proxyAddress })
}
