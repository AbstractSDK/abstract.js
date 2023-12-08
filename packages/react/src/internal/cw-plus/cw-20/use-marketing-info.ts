import { Cw20QueryMsgBuilder, Cw20Types } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type MarketingInfoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.marketingInfo>,
  { marketing_info: unknown }
>

type MarketingInfoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.marketingInfo
>

type UseMarketingInfoArgs = {
  contractAddress?: string
  client?: CosmWasmClient
}

function buildMarketingInfoMsg(
  ...args: MarketingInfoMsgBuilderParameters
): MarketingInfoMsg {
  return Cw20QueryMsgBuilder.marketingInfo(...args) as MarketingInfoMsg
}

export function useMarketingInfo({
  contractAddress,
  client,
}: UseMarketingInfoArgs) {
  const { data: marketingInfo, ...restOutput } = useQuerySmart<
    Cw20Types.MarketingInfoResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildMarketingInfoMsg() })

  return { marketingInfo, ...restOutput }
}
