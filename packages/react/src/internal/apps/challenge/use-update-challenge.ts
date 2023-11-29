import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.updateChallenge>,
  { update_challenge: unknown }
>

type UpdateChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.updateChallenge
>

type UseUpdateChallengeArgs = Parameters<
  typeof useExecuteContract<UpdateChallengeMsg>
>[0]

function buildUpdateChallengeMsg(
  ...args: UpdateChallengeMsgBuilderParameters
): UpdateChallengeMsg {
  return ChallengeExecuteMsgBuilder.updateChallenge(
    ...args,
  ) as UpdateChallengeMsg
}

export function useUpdateChallenge({
  contractAddress,
  ...restInput
}: UseUpdateChallengeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const updateChallenge = React.useCallback(
    function updateChallenge(...args: UpdateChallengeMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateChallengeMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateChallengeAsync = React.useCallback(
    function updateChallengeAsync(
      ...args: UpdateChallengeMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateChallengeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateChallenge, updateChallengeAsync, ...restOutput }
}
