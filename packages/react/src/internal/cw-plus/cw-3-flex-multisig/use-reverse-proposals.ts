import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type ReverseProposalsResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ReverseProposalsMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.reverseProposals>,
  { reverse_proposals: unknown }
>

type ReverseProposalsMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.reverseProposals
>

type UseReverseProposalsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ReverseProposalsMsgBuilderParameters[0]

function buildReverseProposalsMsg(
  ...args: ReverseProposalsMsgBuilderParameters
): ReverseProposalsMsg {
  return Cw3FlexMultisigQueryMsgBuilder.reverseProposals(
    ...args,
  ) as ReverseProposalsMsg
}

export function useReverseProposals({
  contractAddress,
  client,
  ...restInput
}: UseReverseProposalsArgs) {
  const { data: reverseProposals, ...restOutput } = useQuerySmart<
    ReverseProposalsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildReverseProposalsMsg(restInput),
  })

  return { reverseProposals, ...restOutput }
}
