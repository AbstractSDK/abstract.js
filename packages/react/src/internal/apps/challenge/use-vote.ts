import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type VoteResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type VoteMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.vote>,
  { vote: unknown }
>

type VoteMsgBuilderParameters = Parameters<typeof ChallengeQueryMsgBuilder.vote>

type UseVoteArgs = { contractAddress?: string } & VoteMsgBuilderParameters[0]

function buildVoteMsg(...args: VoteMsgBuilderParameters): VoteMsg {
  return ChallengeQueryMsgBuilder.vote(...args) as VoteMsg
}

export function useVote({ contractAddress, ...restInput }: UseVoteArgs) {
  const { data: vote, ...restOutput } = useQuerySmart<VoteResponse, Error>({
    address: contractAddress,
    queryMsg: buildVoteMsg(restInput),
  })

  return { vote, ...restOutput }
}