import { ChallengeTypes, ChallengeQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type FriendsMsg = Extract<
  ReturnType<typeof ChallengeQueryMsgBuilder.friends>,
  { friends: unknown }
>

type FriendsMsgBuilderParameters = Parameters<
  typeof ChallengeQueryMsgBuilder.friends
>

type UseFriendsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & FriendsMsgBuilderParameters[0]

function buildFriendsMsg(...args: FriendsMsgBuilderParameters): FriendsMsg {
  return ChallengeQueryMsgBuilder.friends(...args) as FriendsMsg
}

export function useFriends({
  contractAddress,
  client,
  ...restInput
}: UseFriendsArgs) {
  const { data: friends, ...restOutput } = useQuerySmart<
    ChallengeTypes.FriendsResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildFriendsMsg(restInput) })

  return { friends, ...restOutput }
}
