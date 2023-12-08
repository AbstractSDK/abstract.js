import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateFriendsForChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.updateFriendsForChallenge>,
  { update_friends_for_challenge: unknown }
>

type UpdateFriendsForChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.updateFriendsForChallenge
>[0]

type UseUpdateFriendsForChallengeArgs = Parameters<
  typeof useExecuteContract<UpdateFriendsForChallengeMsg>
>[0]

function buildUpdateFriendsForChallengeMsg(
  args: UpdateFriendsForChallengeMsgBuilderParameters,
): UpdateFriendsForChallengeMsg {
  return ChallengeExecuteMsgBuilder.updateFriendsForChallenge(
    args,
  ) as UpdateFriendsForChallengeMsg
}

export function useUpdateFriendsForChallenge({
  contractAddress,
  ...restInput
}: UseUpdateFriendsForChallengeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateFriendsForChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const updateFriendsForChallenge = React.useCallback(
    function updateFriendsForChallenge({
      senderAddress,
      signingClient,
      ...args
    }: UpdateFriendsForChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateFriendsForChallengeMsg(args),
      })
    },
    [executeContract],
  )

  const updateFriendsForChallengeAsync = React.useCallback(
    function updateFriendsForChallengeAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateFriendsForChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateFriendsForChallengeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return {
    updateFriendsForChallenge,
    updateFriendsForChallengeAsync,
    ...restOutput,
  }
}
