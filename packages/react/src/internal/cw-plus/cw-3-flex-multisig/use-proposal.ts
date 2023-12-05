import {
  Cw3FlexMultisigQueryMsgBuilder,
  Cw3FlexMultisigTypes,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ProposalMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.proposal>,
  { proposal: unknown }
>

type ProposalMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.proposal
>

type UseProposalArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ProposalMsgBuilderParameters[0]

function buildProposalMsg(...args: ProposalMsgBuilderParameters): ProposalMsg {
  return Cw3FlexMultisigQueryMsgBuilder.proposal(...args) as ProposalMsg
}

export function useProposal({
  contractAddress,
  client,
  ...restInput
}: UseProposalArgs) {
  const { data: proposal, ...restOutput } = useQuerySmart<
    Cw3FlexMultisigTypes.ProposalResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildProposalMsg(restInput) })

  return { proposal, ...restOutput }
}
