import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CloseMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.close>,
  { close: unknown }
>

type CloseMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.close
>[0]

type UseCloseArgs = Parameters<typeof useExecuteContract<CloseMsg>>[0]

function buildCloseMsg(args: CloseMsgBuilderParameters): CloseMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.close(args) as CloseMsg
}

export function useClose({ contractAddress, ...restInput }: UseCloseArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CloseMsg>({
      contractAddress,
      ...restInput,
    })

  const close = React.useCallback(
    function close({
      senderAddress,
      signingClient,
      ...args
    }: CloseMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCloseMsg(args),
      })
    },
    [executeContract],
  )

  const closeAsync = React.useCallback(
    function closeAsync({
      senderAddress,
      signingClient,
      ...args
    }: CloseMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCloseMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { close, closeAsync, ...restOutput }
}
