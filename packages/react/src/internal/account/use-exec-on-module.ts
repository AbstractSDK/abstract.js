import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ExecOnModuleMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.execOnModule>,
  { exec_on_module: unknown }
>

type ExecOnModuleMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.execOnModule
>

type UseExecOnModuleArgs = Parameters<
  typeof useExecuteContract<ExecOnModuleMsg>
>[0]

function buildExecOnModuleMsg(
  ...args: ExecOnModuleMsgBuilderParameters
): ExecOnModuleMsg {
  return ManagerExecuteMsgBuilder.execOnModule(...args) as ExecOnModuleMsg
}

export function useExecOnModule({
  contractAddress,
  ...restInput
}: UseExecOnModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ExecOnModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const execOnModule = useCallback(
    function execonmodule(...args: ExecOnModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildExecOnModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const execOnModuleAsync = useCallback(
    function execonmoduleAsync(...args: ExecOnModuleMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildExecOnModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { execOnModule, execOnModuleAsync, ...restOutput }
}
