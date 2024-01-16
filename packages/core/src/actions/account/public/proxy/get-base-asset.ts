import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getProxyQueryClientFromApi } from './get-proxy-query-client-from-api'

export async function getBaseAsset(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const proxyQueryClient = await getProxyQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const { base_asset } = await proxyQueryClient.baseAsset()
  return base_asset
}
