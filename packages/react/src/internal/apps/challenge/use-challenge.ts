import { ChallengeQueryMsgBuilder, ChallengeTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChallengeMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.challenge>,
  { challenge: unknown }
>

type ChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.challenge
>

type UseChallengeArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ChallengeMsgBuilderParameters[0]

function buildChallengeMsg(
  ...args: ChallengeMsgBuilderParameters
): ChallengeMsg {
  return ChallengeQueryMsgBuilder.challenge(...args) as ChallengeMsg
}

export function useChallenge({
  contractAddress,
  client,
  ...restInput
}: UseChallengeArgs) {
  const { data: challenge, ...restOutput } = useQuerySmart<
    ChallengeTypes.ChallengeResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildChallengeMsg(restInput),
  })

  return { challenge, ...restOutput }
}
