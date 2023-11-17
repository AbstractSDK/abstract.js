import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type YankModuleMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.yankModule>,
  { yank_module: unknown }
>

type YankModuleMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.yankModule
>

type UseYankModuleArgs = Parameters<typeof useExecuteContract<YankModuleMsg>>[0]

function buildYankModuleMsg(
  ...args: YankModuleMsgBuilderParameters
): YankModuleMsg {
  return RegistryExecuteMsgBuilder.yankModule(...args) as YankModuleMsg
}

export function useYankModule({
  contractAddress,
  ...restInput
}: UseYankModuleArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<YankModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const yankModule = useCallback(
    function yankModule(...args: YankModuleMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildYankModuleMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const yankModuleAsync = useCallback(
    function yankModuleAsync(...args: YankModuleMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildYankModuleMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { yankModule, yankModuleAsync, ...restOutput }
}
