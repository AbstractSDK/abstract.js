import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ProposalResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { useQuerySmart } from 'graz'

type ProposalMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.proposal>,
  { proposal: unknown }
>

type ProposalMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.proposal
>

type UseProposalArgs = {
  contractAddress?: string
} & ProposalMsgBuilderParameters[0]

function buildProposalMsg(...args: ProposalMsgBuilderParameters): ProposalMsg {
  return Cw3FlexMultisigQueryMsgBuilder.proposal(...args) as ProposalMsg
}

export function useProposal({
  contractAddress,
  ...restInput
}: UseProposalArgs) {
  const { data: proposal, ...restOutput } = useQuerySmart<
    ProposalResponse,
    Error
  >(contractAddress, buildProposalMsg(restInput))

  return { proposal, ...restOutput }
}
