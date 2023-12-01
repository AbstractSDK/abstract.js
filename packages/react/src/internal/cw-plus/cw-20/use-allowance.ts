import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type AllowanceResponse } from '@abstract-money/core/cw-plus/Cw20.types'
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
    AllowanceResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAllowanceMsg(restInput),
  })

  return { allowance, ...restOutput }
}
