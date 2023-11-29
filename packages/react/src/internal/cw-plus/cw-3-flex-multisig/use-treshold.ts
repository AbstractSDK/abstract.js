import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ThresholdResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { useQuerySmart } from 'graz'

type ThresholdMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.threshold>,
  { threshold: unknown }
>

type ThresholdMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.threshold
>

type UseThresholdArgs = { contractAddress?: string }

function buildThresholdMsg(
  ...args: ThresholdMsgBuilderParameters
): ThresholdMsg {
  return Cw3FlexMultisigQueryMsgBuilder.threshold(...args) as ThresholdMsg
}

export function useThreshold({ contractAddress }: UseThresholdArgs) {
  const { data: threshold, ...restOutput } = useQuerySmart<
    ThresholdResponse,
    Error
  >({ address: contractAddress, queryMsg: buildThresholdMsg() })

  return { threshold, ...restOutput }
}
