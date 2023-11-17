import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type AddModuleMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.addModule>,
  { add_module: unknown }
>

type AddModuleMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.addModule
>

type UseAddModuleArgs = Parameters<typeof useExecuteContract<AddModuleMsg>>[0]

function buildAddModuleMsg(
  ...args: AddModuleMsgBuilderParameters
): AddModuleMsg {
  return ProxyExecuteMsgBuilder.addModule(...args) as AddModuleMsg
}

export function useAddModule({
  contractAddress,
  ...restInput
}: UseAddModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AddModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const addModule = useCallback(
    function addmodule(...args: AddModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildAddModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const addModuleAsync = useCallback(
    function addmoduleAsync(...args: AddModuleMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildAddModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { addModule, addModuleAsync, ...restOutput }
}
