import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyQueryClientFromApi } from './get-proxy-query-client-from-api'

export async function getTotalValue(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): Promise<number> {
  const proxyQueryClient = await getProxyQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const res = await proxyQueryClient.totalValue()
  return +res.total_value
}
