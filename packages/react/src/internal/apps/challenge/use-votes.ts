import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type VotesResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type VotesMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.votes>,
  { votes: unknown }
>

type VotesMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.votes
>

type UseVotesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & VotesMsgBuilderParameters[0]

function buildVotesMsg(...args: VotesMsgBuilderParameters): VotesMsg {
  return ChallengeQueryMsgBuilder.votes(...args) as VotesMsg
}

export function useVotes({
  contractAddress,
  client,
  ...restInput
}: UseVotesArgs) {
  const { data: votes, ...restOutput } = useQuerySmart<VotesResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildVotesMsg(restInput),
  })

  return { votes, ...restOutput }
}
