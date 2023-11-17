import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type AssetsConfigResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type AssetsConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.assetsConfig>,
  { assets_config: unknown }
>

type AssetsConfigMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.assetsConfig
>

type UseAssetsConfigArgs = {
  contractAddress?: string
} & AssetsConfigMsgBuilderParameters[0]

function buildAssetsConfigMsg(
  ...args: AssetsConfigMsgBuilderParameters
): AssetsConfigMsg {
  return ProxyQueryMsgBuilder.assetsConfig(...args) as AssetsConfigMsg
}

export function useAssetsConfig({
  contractAddress,
  ...restInput
}: UseAssetsConfigArgs) {
  const { data: assetsConfig, ...restOutput } = useQuerySmart<
    AssetsConfigResponse,
    Error
  >(contractAddress, buildAssetsConfigMsg(restInput))

  return { assetsConfig, ...restOutput }
}
