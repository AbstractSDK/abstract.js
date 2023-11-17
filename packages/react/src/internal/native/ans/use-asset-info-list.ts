import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type AssetsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type AssetInfoListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetInfoList>,
  { asset_info_list: unknown }
>

type AssetInfoListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetInfoList
>

type UseAssetInfoListArgs = {
  contractAddress?: string
} & AssetInfoListMsgBuilderParameters[0]

function buildAssetInfoListMsg(
  ...args: AssetInfoListMsgBuilderParameters
): AssetInfoListMsg {
  return AnsHostQueryMsgBuilder.assetInfoList(...args) as AssetInfoListMsg
}

export function useAssetInfoList({
  contractAddress,
  ...restInput
}: UseAssetInfoListArgs) {
  const { data: assetInfoList, ...restOutput } = useQuerySmart<
    AssetsResponse,
    Error
  >(contractAddress, buildAssetInfoListMsg(restInput))

  return { assetInfoList, ...restOutput }
}
