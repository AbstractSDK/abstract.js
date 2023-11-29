import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type TotalWeightResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { useQuerySmart } from 'graz'

type TotalWeightMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.totalWeight>,
  { total_weight: unknown }
>

type TotalWeightMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.totalWeight
>

type UseTotalWeightArgs = { contractAddress?: string }

function buildTotalWeightMsg(
  ...args: TotalWeightMsgBuilderParameters
): TotalWeightMsg {
  return Cw4GroupQueryMsgBuilder.totalWeight(...args) as TotalWeightMsg
}

export function useTotalWeight({ contractAddress }: UseTotalWeightArgs) {
  const { data: totalWeight, ...restOutput } = useQuerySmart<
    TotalWeightResponse,
    Error
  >({ address: contractAddress, queryMsg: buildTotalWeightMsg() })

  return { totalWeight, ...restOutput }
}
