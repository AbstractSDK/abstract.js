import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type AssetListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type AssetListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetList>,
  { asset_list: unknown }
>

type AssetListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetList
>

type UseAssetListArgs = {
  contractAddress?: string
} & AssetListMsgBuilderParameters[0]

function buildAssetListMsg(
  ...args: AssetListMsgBuilderParameters
): AssetListMsg {
  return AnsHostQueryMsgBuilder.assetList(...args) as AssetListMsg
}

export function useAssetList({
  contractAddress,
  ...restInput
}: UseAssetListArgs) {
  const { data: assetList, ...restOutput } = useQuerySmart<
    AssetListResponse,
    Error
  >({ address: contractAddress, queryMsg: buildAssetListMsg(restInput) })

  return { assetList, ...restOutput }
}
