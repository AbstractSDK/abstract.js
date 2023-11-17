import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type CastVoteMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.castVote>,
  { cast_vote: unknown }
>

type CastVoteMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.castVote
>

type UseCastVoteArgs = Parameters<typeof useExecuteContract<CastVoteMsg>>[0]

function buildCastVoteMsg(...args: CastVoteMsgBuilderParameters): CastVoteMsg {
  return ChallengeExecuteMsgBuilder.castVote(...args) as CastVoteMsg
}

export function useCastVote({
  contractAddress,
  ...restInput
}: UseCastVoteArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CastVoteMsg>({
      contractAddress,
      ...restInput,
    })

  const castVote = useCallback(
    function castVote(...args: CastVoteMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildCastVoteMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const castVoteAsync = useCallback(
    function castVoteAsync(...args: CastVoteMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildCastVoteMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { castVote, castVoteAsync, ...restOutput }
}
