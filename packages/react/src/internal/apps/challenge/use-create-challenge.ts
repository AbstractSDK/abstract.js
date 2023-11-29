import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type CreateChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.createChallenge>,
  { create_challenge: unknown }
>

type CreateChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.createChallenge
>

type UseCreateChallengeArgs = Parameters<
  typeof useExecuteContract<CreateChallengeMsg>
>[0]

function buildCreateChallengeMsg(
  ...args: CreateChallengeMsgBuilderParameters
): CreateChallengeMsg {
  return ChallengeExecuteMsgBuilder.createChallenge(
    ...args,
  ) as CreateChallengeMsg
}

export function useCreateChallenge({
  contractAddress,
  ...restInput
}: UseCreateChallengeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const createChallenge = React.useCallback(
    function createChallenge(...args: CreateChallengeMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildCreateChallengeMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const createChallengeAsync = React.useCallback(
    function createChallengeAsync(
      ...args: CreateChallengeMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildCreateChallengeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { createChallenge, createChallengeAsync, ...restOutput }
}
