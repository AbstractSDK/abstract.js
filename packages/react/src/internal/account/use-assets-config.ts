import { ProxyTypes, ProxyQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type AssetsConfigMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.assetsConfig>,
  { assets_config: unknown }
>

type AssetsConfigMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.assetsConfig
>

type UseAssetsConfigArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetsConfigMsgBuilderParameters[0]

function buildAssetsConfigMsg(
  ...args: AssetsConfigMsgBuilderParameters
): AssetsConfigMsg {
  return ProxyQueryMsgBuilder.assetsConfig(...args) as AssetsConfigMsg
}

export function useAssetsConfig({
  contractAddress,
  client,
  ...restInput
}: UseAssetsConfigArgs) {
  const { data: assetsConfig, ...restOutput } = useQuerySmart<
    ProxyTypes.AssetsConfigResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetsConfigMsg(restInput),
  })

  return { assetsConfig, ...restOutput }
}
