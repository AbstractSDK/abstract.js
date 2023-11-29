import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ListVotersResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { useQuerySmart } from 'graz'

type ListVotersMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.listVoters>,
  { list_voters: unknown }
>

type ListVotersMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.listVoters
>

type UseListVotersArgs = {
  contractAddress?: string
} & ListVotersMsgBuilderParameters[0]

function buildListVotersMsg(
  ...args: ListVotersMsgBuilderParameters
): ListVotersMsg {
  return Cw3FlexMultisigQueryMsgBuilder.listVoters(...args) as ListVotersMsg
}

export function useListVoters({
  contractAddress,
  ...restInput
}: UseListVotersArgs) {
  const { data: listVoters, ...restOutput } = useQuerySmart<
    ListVotersResponse,
    Error
  >({ address: contractAddress, queryMsg: buildListVotersMsg(restInput) })

  return { listVoters, ...restOutput }
}
