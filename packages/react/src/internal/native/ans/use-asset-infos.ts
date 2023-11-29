import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type AssetsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type AssetInfosMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetInfos>,
  { asset_infos: unknown }
>

type AssetInfosMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetInfos
>

type UseAssetInfosArgs = {
  contractAddress?: string
} & AssetInfosMsgBuilderParameters[0]

function buildAssetInfosMsg(
  ...args: AssetInfosMsgBuilderParameters
): AssetInfosMsg {
  return AnsHostQueryMsgBuilder.assetInfos(...args) as AssetInfosMsg
}

export function useAssetInfos({
  contractAddress,
  ...restInput
}: UseAssetInfosArgs) {
  const { data: assetInfos, ...restOutput } = useQuerySmart<
    AssetsResponse,
    Error
  >({ address: contractAddress, queryMsg: buildAssetInfosMsg(restInput) })

  return { assetInfos, ...restOutput }
}
