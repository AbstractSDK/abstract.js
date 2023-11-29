import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type VoteMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.vote>,
  { vote: unknown }
>

type VoteMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.vote
>

type UseVoteArgs = Parameters<typeof useExecuteContract<VoteMsg>>[0]

function buildVoteMsg(...args: VoteMsgBuilderParameters): VoteMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.vote(...args) as VoteMsg
}

export function useVote({ contractAddress, ...restInput }: UseVoteArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<VoteMsg>({
      contractAddress,
      ...restInput,
    })

  const vote = React.useCallback(
    function vote(...args: VoteMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildVoteMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const voteAsync = React.useCallback(
    function voteAsync(...args: VoteMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildVoteMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { vote, voteAsync, ...restOutput }
}
