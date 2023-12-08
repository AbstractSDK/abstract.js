import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type VoteMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.vote>,
  { vote: unknown }
>

type VoteMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.vote
>[0]

type UseVoteArgs = Parameters<typeof useExecuteContract<VoteMsg>>[0]

function buildVoteMsg(args: VoteMsgBuilderParameters): VoteMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.vote(args) as VoteMsg
}

export function useVote({ contractAddress, ...restInput }: UseVoteArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<VoteMsg>({
      contractAddress,
      ...restInput,
    })

  const vote = React.useCallback(
    function vote({
      senderAddress,
      signingClient,
      ...args
    }: VoteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildVoteMsg(args),
      })
    },
    [executeContract],
  )

  const voteAsync = React.useCallback(
    function voteAsync({
      senderAddress,
      signingClient,
      ...args
    }: VoteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildVoteMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { vote, voteAsync, ...restOutput }
}
