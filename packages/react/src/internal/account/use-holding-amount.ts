import { ProxyQueryMsgBuilder } from '@abstract-money/core'
import { type HoldingAmountResponse } from '@abstract-money/core/account/proxy/Proxy.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type HoldingAmountMsg = Extract<
  ReturnType<typeof ProxyQueryMsgBuilder.holdingAmount>,
  { holding_amount: unknown }
>

type HoldingAmountMsgBuilderParameters = Parameters<
  typeof ProxyQueryMsgBuilder.holdingAmount
>

type UseHoldingAmountArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & HoldingAmountMsgBuilderParameters[0]

function buildHoldingAmountMsg(
  ...args: HoldingAmountMsgBuilderParameters
): HoldingAmountMsg {
  return ProxyQueryMsgBuilder.holdingAmount(...args) as HoldingAmountMsg
}

export function useHoldingAmount({
  contractAddress,
  client,
  ...restInput
}: UseHoldingAmountArgs) {
  const { data: holdingAmount, ...restOutput } = useQuerySmart<
    HoldingAmountResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildHoldingAmountMsg(restInput),
  })

  return { holdingAmount, ...restOutput }
}
