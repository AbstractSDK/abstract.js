import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getProxyQueryClientFromApi } from './get-proxy-query-client-from-api'

export type GetTotalValueParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getTotalValue({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetTotalValueParameters): Promise<number> {
  const proxyQueryClient = await getProxyQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const res = await proxyQueryClient.totalValue()
  // @TODO: might overflow a number
  return +res.total_value
}
