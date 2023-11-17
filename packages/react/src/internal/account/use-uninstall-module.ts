import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UninstallModuleMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.uninstallModule>,
  { uninstall_module: unknown }
>

type UninstallModuleMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.uninstallModule
>

type UseUninstallModuleArgs = Parameters<
  typeof useExecuteContract<UninstallModuleMsg>
>[0]

function buildUninstallModuleMsg(
  ...args: UninstallModuleMsgBuilderParameters
): UninstallModuleMsg {
  return ManagerExecuteMsgBuilder.uninstallModule(...args) as UninstallModuleMsg
}

export function useUninstallModule({
  contractAddress,
  ...restInput
}: UseUninstallModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UninstallModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const uninstallModule = useCallback(
    function uninstallModule(...args: UninstallModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUninstallModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const uninstallModuleAsync = useCallback(
    function uninstallModuleAsync(
      ...args: UninstallModuleMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUninstallModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { uninstallModule, uninstallModuleAsync, ...restOutput }
}
