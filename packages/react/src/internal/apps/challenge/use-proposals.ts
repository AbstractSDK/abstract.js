import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type ProposalsResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type ProposalsMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.proposals>,
  { proposals: unknown }
>

type ProposalsMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.proposals
>

type UseProposalsArgs = {
  contractAddress?: string
} & ProposalsMsgBuilderParameters[0]

function buildProposalsMsg(
  ...args: ProposalsMsgBuilderParameters
): ProposalsMsg {
  return ChallengeQueryMsgBuilder.proposals(...args) as ProposalsMsg
}

export function useProposals({
  contractAddress,
  ...restInput
}: UseProposalsArgs) {
  const { data: proposals, ...restOutput } = useQuerySmart<
    ProposalsResponse,
    Error
  >({ address: contractAddress, queryMsg: buildProposalsMsg(restInput) })

  return { proposals, ...restOutput }
}
