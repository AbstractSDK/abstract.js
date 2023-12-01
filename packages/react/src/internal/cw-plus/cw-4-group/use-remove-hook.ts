import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type RemoveHookMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.removeHook>,
  { remove_hook: unknown }
>

type RemoveHookMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.removeHook
>[0]

type UseRemoveHookArgs = Parameters<typeof useExecuteContract<RemoveHookMsg>>[0]

function buildRemoveHookMsg(
  args: RemoveHookMsgBuilderParameters,
): RemoveHookMsg {
  return Cw4GroupExecuteMsgBuilder.removeHook(args) as RemoveHookMsg
}

export function useRemoveHook({
  contractAddress,
  ...restInput
}: UseRemoveHookArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveHookMsg>({
      contractAddress,
      ...restInput,
    })

  const removeHook = React.useCallback(
    function removeHook({
      senderAddress,
      signingClient,
      ...args
    }: RemoveHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildRemoveHookMsg(args),
      })
    },
    [executeContract],
  )

  const removeHookAsync = React.useCallback(
    function removeHookAsync({
      senderAddress,
      signingClient,
      ...args
    }: RemoveHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildRemoveHookMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { removeHook, removeHookAsync, ...restOutput }
}
