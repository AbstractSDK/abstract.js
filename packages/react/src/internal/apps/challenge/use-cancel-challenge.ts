import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type CancelChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.cancelChallenge>,
  { cancel_challenge: unknown }
>

type CancelChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.cancelChallenge
>

type UseCancelChallengeArgs = Parameters<
  typeof useExecuteContract<CancelChallengeMsg>
>[0]

function buildCancelChallengeMsg(
  ...args: CancelChallengeMsgBuilderParameters
): CancelChallengeMsg {
  return ChallengeExecuteMsgBuilder.cancelChallenge(
    ...args,
  ) as CancelChallengeMsg
}

export function useCancelChallenge({
  contractAddress,
  ...restInput
}: UseCancelChallengeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CancelChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const cancelChallenge = React.useCallback(
    function cancelChallenge(...args: CancelChallengeMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildCancelChallengeMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const cancelChallengeAsync = React.useCallback(
    function cancelChallengeAsync(
      ...args: CancelChallengeMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildCancelChallengeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { cancelChallenge, cancelChallengeAsync, ...restOutput }
}
