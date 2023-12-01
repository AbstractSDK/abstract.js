import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type AssetConfigResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type AssetConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.assetConfig>,
  { asset_config: unknown }
>

type AssetConfigMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.assetConfig
>

type UseAssetConfigArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetConfigMsgBuilderParameters[0]

function buildAssetConfigMsg(
  ...args: AssetConfigMsgBuilderParameters
): AssetConfigMsg {
  return ProxyQueryMsgBuilder.assetConfig(...args) as AssetConfigMsg
}

export function useAssetConfig({
  contractAddress,
  client,
  ...restInput
}: UseAssetConfigArgs) {
  const { data: assetConfig, ...restOutput } = useQuerySmart<
    AssetConfigResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetConfigMsg(restInput),
  })

  return { assetConfig, ...restOutput }
}
