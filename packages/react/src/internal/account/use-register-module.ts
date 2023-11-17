import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type RegisterModuleMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.registerModule>,
  { register_module: unknown }
>

type RegisterModuleMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.registerModule
>

type UseregisterModuleArgs = Parameters<
  typeof useExecuteContract<RegisterModuleMsg>
>[0]

function buildRegisterModuleMsg(
  ...args: RegisterModuleMsgBuilderParameters
): RegisterModuleMsg {
  return ManagerExecuteMsgBuilder.registerModule(...args) as RegisterModuleMsg
}

export function useRegisterModule({
  contractAddress,
  ...restInput
}: UseregisterModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RegisterModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const registerModule = useCallback(
    function registerModule(...args: RegisterModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildRegisterModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const registerModuleAsync = useCallback(
    function registerModuleAsync(...args: RegisterModuleMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildRegisterModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { registerModule, registerModuleAsync, ...restOutput }
}
