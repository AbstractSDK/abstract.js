import { Cw4GroupQueryMsgBuilder, Cw4GroupTypes } from '@abstract-money/core'
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
    Cw4GroupTypes.TotalWeightResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildTotalWeightMsg() })

  return { totalWeight, ...restOutput }
}
