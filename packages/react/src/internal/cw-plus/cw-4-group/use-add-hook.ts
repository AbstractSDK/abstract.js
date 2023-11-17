import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type AddHookMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.addHook>,
  { add_hook: unknown }
>

type AddHookMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.addHook
>

type UseAddHookArgs = Parameters<typeof useExecuteContract<AddHookMsg>>[0]

function buildAddHookMsg(...args: AddHookMsgBuilderParameters): AddHookMsg {
  return Cw4GroupExecuteMsgBuilder.addHook(...args) as AddHookMsg
}

export function useAddHook({ contractAddress, ...restInput }: UseAddHookArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AddHookMsg>({
      contractAddress,
      ...restInput,
    })

  const addHook = useCallback(
    function addHook(...args: AddHookMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildAddHookMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const addHookAsync = useCallback(
    function addHookAsync(...args: AddHookMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildAddHookMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { addHook, addHookAsync, ...restOutput }
}
