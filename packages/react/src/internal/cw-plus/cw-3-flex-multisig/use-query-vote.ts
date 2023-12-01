import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type VoteResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type VoteMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.vote>,
  { vote: unknown }
>

type VoteMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.vote
>

type UseVoteArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & VoteMsgBuilderParameters[0]

function buildVoteMsg(...args: VoteMsgBuilderParameters): VoteMsg {
  return Cw3FlexMultisigQueryMsgBuilder.vote(...args) as VoteMsg
}

export function useQueryVote({
  contractAddress,
  client,
  ...restInput
}: UseVoteArgs) {
  const { data: vote, ...restOutput } = useQuerySmart<VoteResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildVoteMsg(restInput),
  })

  return { vote, ...restOutput }
}
