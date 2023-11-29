import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type CountVotesMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.countVotes>,
  { count_votes: unknown }
>

type CountVotesMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.countVotes
>

type UseCountVotesArgs = Parameters<typeof useExecuteContract<CountVotesMsg>>[0]

function buildCountVotesMsg(
  ...args: CountVotesMsgBuilderParameters
): CountVotesMsg {
  return ChallengeExecuteMsgBuilder.countVotes(...args) as CountVotesMsg
}

export function useCountVotes({
  contractAddress,
  ...restInput
}: UseCountVotesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CountVotesMsg>({
      contractAddress,
      ...restInput,
    })

  const countVotes = React.useCallback(
    function countVotes(...args: CountVotesMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildCountVotesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const countVotesAsync = React.useCallback(
    function countVotesAsync(...args: CountVotesMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildCountVotesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { countVotes, countVotesAsync, ...restOutput }
}
