import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type VotesResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type VotesMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.votes>,
  { votes: unknown }
>

type VotesMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.votes
>

type UseVotesArgs = { contractAddress?: string } & VotesMsgBuilderParameters[0]

function buildVotesMsg(...args: VotesMsgBuilderParameters): VotesMsg {
  return ChallengeQueryMsgBuilder.votes(...args) as VotesMsg
}

export function useVotes({ contractAddress, ...restInput }: UseVotesArgs) {
  const { data: votes, ...restOutput } = useQuerySmart<VotesResponse, Error>({
    address: contractAddress,
    queryMsg: buildVotesMsg(restInput),
  })

  return { votes, ...restOutput }
}
