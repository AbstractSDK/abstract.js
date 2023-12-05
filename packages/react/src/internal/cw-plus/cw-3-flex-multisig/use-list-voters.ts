import {
  Cw3FlexMultisigTypes,
  Cw3FlexMultisigQueryMsgBuilder,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListVotersMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.listVoters>,
  { list_voters: unknown }
>

type ListVotersMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.listVoters
>

type UseListVotersArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ListVotersMsgBuilderParameters[0]

function buildListVotersMsg(
  ...args: ListVotersMsgBuilderParameters
): ListVotersMsg {
  return Cw3FlexMultisigQueryMsgBuilder.listVoters(...args) as ListVotersMsg
}

export function useListVoters({
  contractAddress,
  client,
  ...restInput
}: UseListVotersArgs) {
  const { data: listVoters, ...restOutput } = useQuerySmart<
    Cw3FlexMultisigTypes.ListVotersResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildListVotersMsg(restInput),
  })

  return { listVoters, ...restOutput }
}
