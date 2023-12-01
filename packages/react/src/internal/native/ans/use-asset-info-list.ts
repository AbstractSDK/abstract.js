import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type AssetsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AssetInfoListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetInfoList>,
  { asset_info_list: unknown }
>

type AssetInfoListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetInfoList
>

type UseAssetInfoListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetInfoListMsgBuilderParameters[0]

function buildAssetInfoListMsg(
  ...args: AssetInfoListMsgBuilderParameters
): AssetInfoListMsg {
  return AnsHostQueryMsgBuilder.assetInfoList(...args) as AssetInfoListMsg
}

export function useAssetInfoList({
  contractAddress,
  client,
  ...restInput
}: UseAssetInfoListArgs) {
  const { data: assetInfoList, ...restOutput } = useQuerySmart<
    AssetsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetInfoListMsg(restInput),
  })

  return { assetInfoList, ...restOutput }
}
