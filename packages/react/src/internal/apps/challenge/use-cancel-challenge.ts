import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CancelChallengeMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.cancelChallenge>,
  { cancel_challenge: unknown }
>

type CancelChallengeMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.cancelChallenge
>[0]

type UseCancelChallengeArgs = Parameters<
  typeof useExecuteContract<CancelChallengeMsg>
>[0]

function buildCancelChallengeMsg(
  args: CancelChallengeMsgBuilderParameters,
): CancelChallengeMsg {
  return ChallengeExecuteMsgBuilder.cancelChallenge(args) as CancelChallengeMsg
}

export function useCancelChallenge({
  contractAddress,
  ...restInput
}: UseCancelChallengeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CancelChallengeMsg>({
      contractAddress,
      ...restInput,
    })

  const cancelChallenge = React.useCallback(
    function cancelChallenge({
      senderAddress,
      signingClient,
      ...args
    }: CancelChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCancelChallengeMsg(args),
      })
    },
    [executeContract],
  )

  const cancelChallengeAsync = React.useCallback(
    function cancelChallengeAsync({
      senderAddress,
      signingClient,
      ...args
    }: CancelChallengeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCancelChallengeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { cancelChallenge, cancelChallengeAsync, ...restOutput }
}
