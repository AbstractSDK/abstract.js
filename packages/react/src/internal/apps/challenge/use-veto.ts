import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type VetoMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.veto>,
  { veto: unknown }
>

type VetoMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.veto
>[0]

type UseVetoArgs = Parameters<typeof useExecuteContract<VetoMsg>>[0]

function buildVetoMsg(args: VetoMsgBuilderParameters): VetoMsg {
  return ChallengeExecuteMsgBuilder.veto(args) as VetoMsg
}

export function useVeto({ contractAddress, ...restInput }: UseVetoArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<VetoMsg>({
      contractAddress,
      ...restInput,
    })

  const veto = React.useCallback(
    function veto({
      senderAddress,
      signingClient,
      ...args
    }: VetoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildVetoMsg(args),
      })
    },
    [executeContract],
  )

  const vetoAsync = React.useCallback(
    function vetoAsync({
      senderAddress,
      signingClient,
      ...args
    }: VetoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildVetoMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { veto, vetoAsync, ...restOutput }
}
