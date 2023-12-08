import { ChallengeQueryMsgBuilder, ChallengeTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChallengesMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.challenges>,
  { challenges: unknown }
>

type ChallengesMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.challenges
>

type UseChallengesArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ChallengesMsgBuilderParameters[0]

function buildChallengesMsg(
  ...args: ChallengesMsgBuilderParameters
): ChallengesMsg {
  return ChallengeQueryMsgBuilder.challenges(...args) as ChallengesMsg
}

export function useChallenges({
  contractAddress,
  client,
  ...restInput
}: UseChallengesArgs) {
  const { data: challenges, ...restOutput } = useQuerySmart<
    ChallengeTypes.ChallengesResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildChallengesMsg(restInput),
  })

  return { challenges, ...restOutput }
}
