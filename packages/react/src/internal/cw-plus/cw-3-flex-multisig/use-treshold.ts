import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ThresholdResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ThresholdMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.threshold>,
  { threshold: unknown }
>

type ThresholdMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.threshold
>

type UseThresholdArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildThresholdMsg(
  ...args: ThresholdMsgBuilderParameters
): ThresholdMsg {
  return Cw3FlexMultisigQueryMsgBuilder.threshold(...args) as ThresholdMsg
}

export function useThreshold({ contractAddress, client }: UseThresholdArgs) {
  const { data: threshold, ...restOutput } = useQuerySmart<
    ThresholdResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildThresholdMsg() })

  return { threshold, ...restOutput }
}
