import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateFriendsForChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.updateFriendsForChallenge>,
  { update_friends_for_challenge: unknown }
>

type UpdateFriendsForChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.updateFriendsForChallenge
>

type UseUpdateFriendsForChallengeArgs = Parameters<
  typeof useExecuteContract<UpdateFriendsForChallengeMsg>
>[0]

function buildUpdateFriendsForChallengeMsg(
  ...args: UpdateFriendsForChallengeMsgBuilderParameters
): UpdateFriendsForChallengeMsg {
  return ChallengeExecuteMsgBuilder.updateFriendsForChallenge(
    ...args,
  ) as UpdateFriendsForChallengeMsg
}

export function useUpdateFriendsForChallenge({
  contractAddress,
  ...restInput
}: UseUpdateFriendsForChallengeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateFriendsForChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const updateFriendsForChallenge = React.useCallback(
    function updateFriendsForChallenge(
      ...args: UpdateFriendsForChallengeMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildUpdateFriendsForChallengeMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateFriendsForChallengeAsync = React.useCallback(
    function updateFriendsForChallengeAsync(
      ...args: UpdateFriendsForChallengeMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateFriendsForChallengeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return {
    updateFriendsForChallenge,
    updateFriendsForChallengeAsync,
    ...restOutput,
  }
}
