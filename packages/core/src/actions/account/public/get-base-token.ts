import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { CW20Token, NativeToken } from '../../../utils'
import { getProxyQueryClientFromApi } from './get-proxy-query-client-from-api'

function hasNativeField(base_asset: any): base_asset is { native: string } {
  return (base_asset as { native: string }).native !== undefined
}

function hasCw20Field(base_asset: any): base_asset is { cw20: string } {
  return (base_asset as { cw20: string }).cw20 !== undefined
}

export type GetBaseTokenParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getBaseToken({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetBaseTokenParameters) {
  const proxyQueryClient = await getProxyQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  const { base_asset } = await proxyQueryClient.baseAsset()
  if (hasNativeField(base_asset))
    return {
      denom: base_asset.native,
      type: 'native',
    } as const satisfies NativeToken
  if (hasCw20Field(base_asset))
    return {
      address: base_asset.cw20,
      type: 'cw20',
    } as const satisfies CW20Token
  throw new Error('Invalid base asset')
}
