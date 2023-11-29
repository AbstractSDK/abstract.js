import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type VoterResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { useQuerySmart } from 'graz'

type VoterMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.voter>,
  { voter: unknown }
>

type VoterMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.voter
>

type UseVoterArgs = {
  contractAddress?: string
} & VoterMsgBuilderParameters[0]

function buildVoterMsg(...args: VoterMsgBuilderParameters): VoterMsg {
  return Cw3FlexMultisigQueryMsgBuilder.voter(...args) as VoterMsg
}

export function useVoter({ contractAddress, ...restInput }: UseVoterArgs) {
  const { data: voter, ...restOutput } = useQuerySmart<VoterResponse, Error>({
    address: contractAddress,
    queryMsg: buildVoterMsg(restInput),
  })

  return { voter, ...restOutput }
}
