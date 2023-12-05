import {
  Cw3FlexMultisigTypes,
  Cw3FlexMultisigQueryMsgBuilder,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListProposalsMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.listProposals>,
  { list_proposals: unknown }
>

type ListProposalsMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.listProposals
>

type UseListProposalsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
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
  client,
  ...restInput
}: UseListProposalsArgs) {
  const { data: listProposals, ...restOutput } = useQuerySmart<
    Cw3FlexMultisigTypes.ListProposalsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildListProposalsMsg(restInput),
  })

  return { listProposals, ...restOutput }
}
