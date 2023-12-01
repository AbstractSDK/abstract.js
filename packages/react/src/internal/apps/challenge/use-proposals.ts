import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type ProposalsResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ProposalsMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.proposals>,
  { proposals: unknown }
>

type ProposalsMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.proposals
>

type UseProposalsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ProposalsMsgBuilderParameters[0]

function buildProposalsMsg(
  ...args: ProposalsMsgBuilderParameters
): ProposalsMsg {
  return ChallengeQueryMsgBuilder.proposals(...args) as ProposalsMsg
}

export function useProposals({
  contractAddress,
  client,
  ...restInput
}: UseProposalsArgs) {
  const { data: proposals, ...restOutput } = useQuerySmart<
    ProposalsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildProposalsMsg(restInput),
  })

  return { proposals, ...restOutput }
}
