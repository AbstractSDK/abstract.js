import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type AllAllowancesResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AllAllowancesMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.allAllowances>,
  { all_allowances: unknown }
>

type AllAllowancesMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.allAllowances
>

type UseAllAllowancesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AllAllowancesMsgBuilderParameters[0]

function buildAllAllowancesMsg(
  ...args: AllAllowancesMsgBuilderParameters
): AllAllowancesMsg {
  return Cw20QueryMsgBuilder.allAllowances(...args) as AllAllowancesMsg
}

export function useAllAllowances({
  contractAddress,
  client,
  ...restInput
}: UseAllAllowancesArgs) {
  const { data: allowances, ...restOutput } = useQuerySmart<
    AllAllowancesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAllAllowancesMsg(restInput),
  })

  return { allowances, ...restOutput }
}
