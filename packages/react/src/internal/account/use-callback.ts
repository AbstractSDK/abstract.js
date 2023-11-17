import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback as react_useCallback } from 'react'

type CallbackMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.callback>,
  { callback: unknown }
>

type CallbackMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.callback
>

type UseCallbackArgs = Parameters<typeof useExecuteContract<CallbackMsg>>[0]

function buildCallbackMsg(...args: CallbackMsgBuilderParameters): CallbackMsg {
  return ManagerExecuteMsgBuilder.callback(...args) as CallbackMsg
}

export function useCallback({
  contractAddress,
  ...restInput
}: UseCallbackArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CallbackMsg>({
      contractAddress,
      ...restInput,
    })

  const callback = react_useCallback(
    function callback(...args: CallbackMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildCallbackMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const callbackAsync = react_useCallback(
    function callbackAsync(...args: CallbackMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildCallbackMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { callback, callbackAsync, ...restOutput }
}
