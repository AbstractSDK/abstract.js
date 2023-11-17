import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type ChallengesResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type ChallengesMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.challenges>,
  { challenges: unknown }
>

type ChallengesMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.challenges
>

type UseChallengesArgs = {
  contractAddress?: string
} & ChallengesMsgBuilderParameters[0]

function buildChallengesMsg(
  ...args: ChallengesMsgBuilderParameters
): ChallengesMsg {
  return ChallengeQueryMsgBuilder.challenges(...args) as ChallengesMsg
}

export function useChallenges({
  contractAddress,
  ...restInput
}: UseChallengesArgs) {
  const { data: challenges, ...restOutput } = useQuerySmart<
    ChallengesResponse,
    Error
  >(contractAddress, buildChallengesMsg(restInput))

  return { challenges, ...restOutput }
}
