import { ChallengeQueryMsgBuilder, ChallengeTypes } from '@abstract-money/core'
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
  const { data: votes, ...restOutput } = useQuerySmart<
    ChallengeTypes.VotesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildVotesMsg(restInput),
  })

  return { votes, ...restOutput }
}
