import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type HoldingAmountResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { useQuerySmart } from 'graz'

type HoldingAmountMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.holdingAmount>,
  { holding_amount: unknown }
>

type HoldingAmountMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.holdingAmount
>

type UseHoldingAmountArgs = {
  contractAddress?: string
} & HoldingAmountMsgBuilderParameters[0]

function buildHoldingAmountMsg(
  ...args: HoldingAmountMsgBuilderParameters
): HoldingAmountMsg {
  return ProxyQueryMsgBuilder.holdingAmount(...args) as HoldingAmountMsg
}

export function useHoldingAmount({
  contractAddress,
  ...restInput
}: UseHoldingAmountArgs) {
  const { data: holdingAmount, ...restOutput } = useQuerySmart<
    HoldingAmountResponse,
    Error
  >({ address: contractAddress, queryMsg: buildHoldingAmountMsg(restInput) })

  return { holdingAmount, ...restOutput }
}
