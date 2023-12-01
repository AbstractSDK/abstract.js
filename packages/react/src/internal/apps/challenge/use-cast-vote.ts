import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CastVoteMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.castVote>,
  { cast_vote: unknown }
>

type CastVoteMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.castVote
>[0]

type UseCastVoteArgs = Parameters<typeof useExecuteContract<CastVoteMsg>>[0]

function buildCastVoteMsg(args: CastVoteMsgBuilderParameters): CastVoteMsg {
  return ChallengeExecuteMsgBuilder.castVote(args) as CastVoteMsg
}

export function useCastVote({
  contractAddress,
  ...restInput
}: UseCastVoteArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CastVoteMsg>({
      contractAddress,
      ...restInput,
    })

  const castVote = React.useCallback(
    function castVote({
      senderAddress,
      signingClient,
      ...args
    }: CastVoteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCastVoteMsg(args),
      })
    },
    [executeContract],
  )

  const castVoteAsync = React.useCallback(
    function castVoteAsync({
      senderAddress,
      signingClient,
      ...args
    }: CastVoteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCastVoteMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { castVote, castVoteAsync, ...restOutput }
}
