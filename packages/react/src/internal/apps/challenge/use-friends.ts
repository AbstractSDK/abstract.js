import { ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { type FriendsResponse } from '@abstract-money/core/apps/challenge/Challenge.types'
import { useQuerySmart } from 'graz'

type FriendsMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.friends>,
  { friends: unknown }
>

type FriendsMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.friends
>

type UseFriendsArgs = {
  contractAddress?: string
} & FriendsMsgBuilderParameters[0]

function buildFriendsMsg(...args: FriendsMsgBuilderParameters): FriendsMsg {
  return ChallengeQueryMsgBuilder.friends(...args) as FriendsMsg
}

export function useFriends({ contractAddress, ...restInput }: UseFriendsArgs) {
  const { data: friends, ...restOutput } = useQuerySmart<
    FriendsResponse,
    Error
  >(contractAddress, buildFriendsMsg(restInput))

  return { friends, ...restOutput }
}
