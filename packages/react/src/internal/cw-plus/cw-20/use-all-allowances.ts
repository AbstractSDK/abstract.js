import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type AllAllowancesResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type AllAllowancesMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.allAllowances>,
  { all_allowances: unknown }
>

type AllAllowancesMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.allAllowances
>

type UseAllAllowancesArgs = {
  contractAddress?: string
} & AllAllowancesMsgBuilderParameters[0]

function buildAllAllowancesMsg(
  ...args: AllAllowancesMsgBuilderParameters
): AllAllowancesMsg {
  return Cw20QueryMsgBuilder.allAllowances(...args) as AllAllowancesMsg
}

export function useAllAllowances({
  contractAddress,
  ...restInput
}: UseAllAllowancesArgs) {
  const { data: allowances, ...restOutput } = useQuerySmart<
    AllAllowancesResponse,
    Error
  >(contractAddress, buildAllAllowancesMsg(restInput))

  return { allowances, ...restOutput }
}
