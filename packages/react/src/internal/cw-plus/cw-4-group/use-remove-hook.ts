import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type RemoveHookMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.removeHook>,
  { remove_hook: unknown }
>

type RemoveHookMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.removeHook
>

type UseRemoveHookArgs = Parameters<typeof useExecuteContract<RemoveHookMsg>>[0]

function buildRemoveHookMsg(
  ...args: RemoveHookMsgBuilderParameters
): RemoveHookMsg {
  return Cw4GroupExecuteMsgBuilder.removeHook(...args) as RemoveHookMsg
}

export function useRemoveHook({
  contractAddress,
  ...restInput
}: UseRemoveHookArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveHookMsg>({
      contractAddress,
      ...restInput,
    })

  const removeHook = React.useCallback(
    function removeHook(...args: RemoveHookMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildRemoveHookMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const removeHookAsync = React.useCallback(
    function removeHookAsync(...args: RemoveHookMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildRemoveHookMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { removeHook, removeHookAsync, ...restOutput }
}
