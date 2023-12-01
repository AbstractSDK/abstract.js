import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type AddHookMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.addHook>,
  { add_hook: unknown }
>

type AddHookMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.addHook
>[0]

type UseAddHookArgs = Parameters<typeof useExecuteContract<AddHookMsg>>[0]

function buildAddHookMsg(args: AddHookMsgBuilderParameters): AddHookMsg {
  return Cw4GroupExecuteMsgBuilder.addHook(args) as AddHookMsg
}

export function useAddHook({ contractAddress, ...restInput }: UseAddHookArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AddHookMsg>({
      contractAddress,
      ...restInput,
    })

  const addHook = React.useCallback(
    function addHook({
      senderAddress,
      signingClient,
      ...args
    }: AddHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildAddHookMsg(args),
      })
    },
    [executeContract],
  )

  const addHookAsync = React.useCallback(
    function addHookAsync({
      senderAddress,
      signingClient,
      ...args
    }: AddHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildAddHookMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { addHook, addHookAsync, ...restOutput }
}
