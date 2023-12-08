import { AnsHostQueryMsgBuilder, AnsHostTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AssetListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetList>,
  { asset_list: unknown }
>

type AssetListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetList
>

type UseAssetListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetListMsgBuilderParameters[0]

function buildAssetListMsg(
  ...args: AssetListMsgBuilderParameters
): AssetListMsg {
  return AnsHostQueryMsgBuilder.assetList(...args) as AssetListMsg
}

export function useAssetList({
  contractAddress,
  client,
  ...restInput
}: UseAssetListArgs) {
  const { data: assetList, ...restOutput } = useQuerySmart<
    AnsHostTypes.AssetListResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetListMsg(restInput),
  })

  return { assetList, ...restOutput }
}
