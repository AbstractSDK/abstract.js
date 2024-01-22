import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getProxyQueryClientFromApi } from './get-proxy-query-client-from-api'

export type GetTotalValueParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getTotalValue({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetTotalValueParameters): Promise<number> {
  const proxyQueryClient = await getProxyQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  const res = await proxyQueryClient.totalValue()
  return +res.total_value
}
