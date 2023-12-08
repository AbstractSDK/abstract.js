import { Cw20QueryMsgBuilder, Cw20Types } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AllowanceMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.allowance>,
  { allowance: unknown }
>

type AllowanceMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.allowance
>

type UseAllowanceArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AllowanceMsgBuilderParameters[0]

function buildAllowanceMsg(
  ...args: AllowanceMsgBuilderParameters
): AllowanceMsg {
  return Cw20QueryMsgBuilder.allowance(...args) as AllowanceMsg
}

export function useAllowance({
  contractAddress,
  client,
  ...restInput
}: UseAllowanceArgs) {
  const { data: allowance, ...restOutput } = useQuerySmart<
    Cw20Types.AllowanceResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAllowanceMsg(restInput),
  })

  return { allowance, ...restOutput }
}
