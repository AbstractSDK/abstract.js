import { Cw3FlexMultisigQueryMsgBuilder } from '@abstract-money/core'
import { type VoterResponse } from '@abstract-money/core/cw-plus/Cw3FlexMultisig.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type VoterMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigQueryMsgBuilder.voter>,
  { voter: unknown }
>

type VoterMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigQueryMsgBuilder.voter
>

type UseVoterArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & VoterMsgBuilderParameters[0]

function buildVoterMsg(...args: VoterMsgBuilderParameters): VoterMsg {
  return Cw3FlexMultisigQueryMsgBuilder.voter(...args) as VoterMsg
}

export function useVoter({
  contractAddress,
  client,
  ...restInput
}: UseVoterArgs) {
  const { data: voter, ...restOutput } = useQuerySmart<VoterResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildVoterMsg(restInput),
  })

  return { voter, ...restOutput }
}
