import { ProxyQueryMsgBuilder, ProxyTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type BaseAssetMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.baseAsset>,
  { base_asset: unknown }
>

type BaseAssetMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.baseAsset
>

type UseBaseAssetArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildBaseAssetMsg(
  ...args: BaseAssetMsgBuilderParameters
): BaseAssetMsg {
  return ProxyQueryMsgBuilder.baseAsset(...args) as BaseAssetMsg
}

export function useBaseAsset({ contractAddress, client }: UseBaseAssetArgs) {
  const { data: baseAsset, ...restOutput } = useQuerySmart<
    ProxyTypes.BaseAssetResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildBaseAssetMsg() })

  return { baseAsset, ...restOutput }
}
