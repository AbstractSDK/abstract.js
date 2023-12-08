import { ChallengeQueryMsgBuilder, ChallengeTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type VoteMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.vote>,
  { vote: unknown }
>

type VoteMsgBuilderParameters = Parameters<typeof ChallengeQueryMsgBuilder.vote>

type UseVoteArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & VoteMsgBuilderParameters[0]

function buildVoteMsg(...args: VoteMsgBuilderParameters): VoteMsg {
  return ChallengeQueryMsgBuilder.vote(...args) as VoteMsg
}

export function useVote({
  contractAddress,
  client,
  ...restInput
}: UseVoteArgs) {
  const { data: vote, ...restOutput } = useQuerySmart<
    ChallengeTypes.VoteResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildVoteMsg(restInput),
  })

  return { vote, ...restOutput }
}
