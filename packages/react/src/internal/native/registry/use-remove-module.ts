import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type RemoveModuleMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.removeModule>,
  { remove_module: unknown }
>

type RemoveModuleMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.removeModule
>

type UseRemoveModuleArgs = Parameters<
  typeof useExecuteContract<RemoveModuleMsg>
>[0]

function buildRemoveModuleMsg(
  ...args: RemoveModuleMsgBuilderParameters
): RemoveModuleMsg {
  return RegistryExecuteMsgBuilder.removeModule(...args) as RemoveModuleMsg
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

  const removeModule = React.useCallback(
    function removeModule(...args: RemoveModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildRemoveModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const removeModuleAsync = React.useCallback(
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
