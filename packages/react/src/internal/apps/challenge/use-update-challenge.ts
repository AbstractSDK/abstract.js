import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.updateChallenge>,
  { update_challenge: unknown }
>

type UpdateChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.updateChallenge
>[0]

type UseUpdateChallengeArgs = Parameters<
  typeof useExecuteContract<UpdateChallengeMsg>
>[0]

function buildUpdateChallengeMsg(
  args: UpdateChallengeMsgBuilderParameters,
): UpdateChallengeMsg {
  return ChallengeExecuteMsgBuilder.updateChallenge(args) as UpdateChallengeMsg
}

export function useUpdateChallenge({
  contractAddress,
  ...restInput
}: UseUpdateChallengeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const updateChallenge = React.useCallback(
    function updateChallenge({
      senderAddress,
      signingClient,
      ...args
    }: UpdateChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateChallengeMsg(args),
      })
    },
    [executeContract],
  )

  const updateChallengeAsync = React.useCallback(
    function updateChallengeAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateChallengeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateChallenge, updateChallengeAsync, ...restOutput }
}
