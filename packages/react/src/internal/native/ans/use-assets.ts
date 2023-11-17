import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type AssetsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type AssetsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.assets>,
  { assets: unknown }
>

type AssetsMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.assets
>

type UseAssetsArgs = {
  contractAddress?: string
} & AssetsMsgBuilderParameters[0]

function buildAssetsMsg(...args: AssetsMsgBuilderParameters): AssetsMsg {
  return AnsHostQueryMsgBuilder.assets(...args) as AssetsMsg
}

export function useAssets({ contractAddress, ...restInput }: UseAssetsArgs) {
  const { data: assets, ...restOutput } = useQuerySmart<AssetsResponse, Error>(
    contractAddress,
    buildAssetsMsg(restInput),
  )

  return { assets, ...restOutput }
}
