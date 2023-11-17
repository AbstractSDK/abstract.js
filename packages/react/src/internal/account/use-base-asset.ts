import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type BaseAssetResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type BaseAssetMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.baseAsset>,
  { base_asset: unknown }
>

type BaseAssetMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.baseAsset
>

type UseBaseAssetArgs = { contractAddress?: string }

function buildBaseAssetMsg(
  ...args: BaseAssetMsgBuilderParameters
): BaseAssetMsg {
  return ProxyQueryMsgBuilder.baseAsset(...args) as BaseAssetMsg
}

export function useBaseAsset({ contractAddress }: UseBaseAssetArgs) {
  const { data: baseAsset, ...restOutput } = useQuerySmart<
    BaseAssetResponse,
    Error
  >(contractAddress, buildBaseAssetMsg())

  return { baseAsset, ...restOutput }
}
