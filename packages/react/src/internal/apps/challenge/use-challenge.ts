import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type ChallengeResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type ChallengeMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.challenge>,
  { challenge: unknown }
>

type ChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.challenge
>

type UseChallengeArgs = {
  contractAddress?: string
} & ChallengeMsgBuilderParameters[0]

function buildChallengeMsg(
  ...args: ChallengeMsgBuilderParameters
): ChallengeMsg {
  return ChallengeQueryMsgBuilder.challenge(...args) as ChallengeMsg
}

export function useChallenge({
  contractAddress,
  ...restInput
}: UseChallengeArgs) {
  const { data: challenge, ...restOutput } = useQuerySmart<
    ChallengeResponse,
    Error
  >({ address: contractAddress, queryMsg: buildChallengeMsg(restInput) })

  return { challenge, ...restOutput }
}
