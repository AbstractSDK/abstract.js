import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CountVotesMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.countVotes>,
  { count_votes: unknown }
>

type CountVotesMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.countVotes
>[0]

type UseCountVotesArgs = Parameters<typeof useExecuteContract<CountVotesMsg>>[0]

function buildCountVotesMsg(
  args: CountVotesMsgBuilderParameters,
): CountVotesMsg {
  return ChallengeExecuteMsgBuilder.countVotes(args) as CountVotesMsg
}

export function useCountVotes({
  contractAddress,
  ...restInput
}: UseCountVotesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CountVotesMsg>({
      contractAddress,
      ...restInput,
    })

  const countVotes = React.useCallback(
    function countVotes({
      senderAddress,
      signingClient,
      ...args
    }: CountVotesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCountVotesMsg(args),
      })
    },
    [executeContract],
  )

  const countVotesAsync = React.useCallback(
    function countVotesAsync({
      senderAddress,
      signingClient,
      ...args
    }: CountVotesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCountVotesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { countVotes, countVotesAsync, ...restOutput }
}
