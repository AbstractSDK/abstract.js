import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type MarketingInfoResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type MarketingInfoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.marketingInfo>,
  { marketing_info: unknown }
>

type MarketingInfoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.marketingInfo
>

type UseMarketingInfoArgs = { contractAddress?: string }

function buildMarketingInfoMsg(
  ...args: MarketingInfoMsgBuilderParameters
): MarketingInfoMsg {
  return Cw20QueryMsgBuilder.marketingInfo(...args) as MarketingInfoMsg
}

export function useMarketingInfo({ contractAddress }: UseMarketingInfoArgs) {
  const { data: marketingInfo, ...restOutput } = useQuerySmart<
    MarketingInfoResponse,
    Error
  >({ address: contractAddress, queryMsg: buildMarketingInfoMsg() })

  return { marketingInfo, ...restOutput }
}
