import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type TotalWeightResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type TotalWeightMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.totalWeight>,
  { total_weight: unknown }
>

type TotalWeightMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.totalWeight
>

type UseTotalWeightArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildTotalWeightMsg(
  ...args: TotalWeightMsgBuilderParameters
): TotalWeightMsg {
  return Cw4GroupQueryMsgBuilder.totalWeight(...args) as TotalWeightMsg
}

export function useTotalWeight({
  contractAddress,
  client,
}: UseTotalWeightArgs) {
  const { data: totalWeight, ...restOutput } = useQuerySmart<
    TotalWeightResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildTotalWeightMsg() })

  return { totalWeight, ...restOutput }
}
