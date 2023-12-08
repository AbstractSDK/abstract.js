import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CreateChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.createChallenge>,
  { create_challenge: unknown }
>

type CreateChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.createChallenge
>[0]

type UseCreateChallengeArgs = Parameters<
  typeof useExecuteContract<CreateChallengeMsg>
>[0]

function buildCreateChallengeMsg(
  args: CreateChallengeMsgBuilderParameters,
): CreateChallengeMsg {
  return ChallengeExecuteMsgBuilder.createChallenge(args) as CreateChallengeMsg
}

export function useCreateChallenge({
  contractAddress,
  ...restInput
}: UseCreateChallengeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const createChallenge = React.useCallback(
    function createChallenge({
      senderAddress,
      signingClient,
      ...args
    }: CreateChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCreateChallengeMsg(args),
      })
    },
    [executeContract],
  )

  const createChallengeAsync = React.useCallback(
    function createChallengeAsync({
      senderAddress,
      signingClient,
      ...args
    }: CreateChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCreateChallengeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { createChallenge, createChallengeAsync, ...restOutput }
}
