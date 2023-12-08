import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ProposeMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.propose>,
  { propose: unknown }
>

type ProposeMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.propose
>[0]

type UseProposeArgs = Parameters<typeof useExecuteContract<ProposeMsg>>[0]

function buildProposeMsg(args: ProposeMsgBuilderParameters): ProposeMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.propose(args) as ProposeMsg
}

export function usePropose({ contractAddress, ...restInput }: UseProposeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ProposeMsg>({
      contractAddress,
      ...restInput,
    })

  const propose = React.useCallback(
    function propose({
      senderAddress,
      signingClient,
      ...args
    }: ProposeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildProposeMsg(args),
      })
    },
    [executeContract],
  )

  const proposeAsync = React.useCallback(
    function proposeAsync({
      senderAddress,
      signingClient,
      ...args
    }: ProposeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildProposeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { propose, proposeAsync, ...restOutput }
}
