import { AnsHostTypes, AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AssetInfosMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assetInfos>,
  { asset_infos: unknown }
>

type AssetInfosMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assetInfos
>

type UseAssetInfosArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AssetInfosMsgBuilderParameters[0]

function buildAssetInfosMsg(
  ...args: AssetInfosMsgBuilderParameters
): AssetInfosMsg {
  return AnsHostQueryMsgBuilder.assetInfos(...args) as AssetInfosMsg
}

export function useAssetInfos({
  contractAddress,
  client,
  ...restInput
}: UseAssetInfosArgs) {
  const { data: assetInfos, ...restOutput } = useQuerySmart<
    AnsHostTypes.AssetsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAssetInfosMsg(restInput),
  })

  return { assetInfos, ...restOutput }
}
