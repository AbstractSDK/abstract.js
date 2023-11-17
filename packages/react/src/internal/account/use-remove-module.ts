import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type RemoveModuleMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.removeModule>,
  { remove_module: unknown }
>

type RemoveModuleMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.removeModule
>

type UseRemoveModuleArgs = Parameters<
  typeof useExecuteContract<RemoveModuleMsg>
>[0]

function buildRemoveModuleMsg(
  ...args: RemoveModuleMsgBuilderParameters
): RemoveModuleMsg {
  return ProxyExecuteMsgBuilder.removeModule(...args) as RemoveModuleMsg
}

export function useRemoveModule({
  contractAddress,
  ...restInput
}: UseRemoveModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const removeModule = useCallback(
    function removeModule(...args: RemoveModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildRemoveModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const removeModuleAsync = useCallback(
    function removeModuleAsync(...args: RemoveModuleMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildRemoveModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { removeModule, removeModuleAsync, ...restOutput }
}
