import { AnsHostQueryMsgBuilder, AnsHostTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AssetsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assets>,
  { assets: unknown }
>

type AssetsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assets
>

type UseAssetsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetsMsgBuilderParameters[0]

function buildAssetsMsg(...args: AssetsMsgBuilderParameters): AssetsMsg {
  return AnsHostQueryMsgBuilder.assets(...args) as AssetsMsg
}

export function useAssets({
  contractAddress,
  client,
  ...restInput
}: UseAssetsArgs) {
  const { data: assets, ...restOutput } = useQuerySmart<
    AnsHostTypes.AssetsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetsMsg(restInput),
  })

  return { assets, ...restOutput }
}
