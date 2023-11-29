import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ListProposalsResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { useQuerySmart } from 'graz'

type ListProposalsMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.listProposals>,
  { list_proposals: unknown }
>

type ListProposalsMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.listProposals
>

type UseListProposalsArgs = {
  contractAddress?: string
} & ListProposalsMsgBuilderParameters[0]

function buildListProposalsMsg(
  ...args: ListProposalsMsgBuilderParameters
): ListProposalsMsg {
  return Cw3FlexMultisigQueryMsgBuilder.listProposals(
    ...args,
  ) as ListProposalsMsg
}

export function useListProposals({
  contractAddress,
  ...restInput
}: UseListProposalsArgs) {
  const { data: listProposals, ...restOutput } = useQuerySmart<
    ListProposalsResponse,
    Error
  >({ address: contractAddress, queryMsg: buildListProposalsMsg(restInput) })

  return { listProposals, ...restOutput }
}
