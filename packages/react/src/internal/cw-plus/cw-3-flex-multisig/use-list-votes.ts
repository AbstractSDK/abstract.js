import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ListVotesResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListVotesMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.listVotes>,
  { list_votes: unknown }
>

type ListVotesMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.listVotes
>

type UseListVotesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ListVotesMsgBuilderParameters[0]

function buildListVotesMsg(
  ...args: ListVotesMsgBuilderParameters
): ListVotesMsg {
  return Cw3FlexMultisigQueryMsgBuilder.listVotes(...args) as ListVotesMsg
}

export function useListVotes({
  contractAddress,
  client,
  ...restInput
}: UseListVotesArgs) {
  const { data: listVotes, ...restOutput } = useQuerySmart<
    ListVotesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildListVotesMsg(restInput),
  })

  return { listVotes, ...restOutput }
}
