import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type AssetConfigResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type AssetConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.assetConfig>,
  { asset_config: unknown }
>

type AssetConfigMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.assetConfig
>

type UseAssetConfigArgs = {
  contractAddress?: string
} & AssetConfigMsgBuilderParameters[0]

function buildAssetConfigMsg(
  ...args: AssetConfigMsgBuilderParameters
): AssetConfigMsg {
  return ProxyQueryMsgBuilder.assetConfig(...args) as AssetConfigMsg
}

export function useAssetConfig({
  contractAddress,
  ...restInput
}: UseAssetConfigArgs) {
  const { data: assetConfig, ...restOutput } = useQuerySmart<
    AssetConfigResponse,
    Error
  >({ address: contractAddress, queryMsg: buildAssetConfigMsg(restInput) })

  return { assetConfig, ...restOutput }
}
