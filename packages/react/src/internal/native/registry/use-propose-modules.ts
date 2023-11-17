import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ProposeModulesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.proposeModules>,
  { propose_modules: unknown }
>

type ProposeModulesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.proposeModules
>

type UseProposeModulesArgs = Parameters<
  typeof useExecuteContract<ProposeModulesMsg>
>[0]

function buildProposeModulesMsg(
  ...args: ProposeModulesMsgBuilderParameters
): ProposeModulesMsg {
  return RegistryExecuteMsgBuilder.proposeModules(...args) as ProposeModulesMsg
}

export function useProposeModules({
  contractAddress,
  ...restInput
}: UseProposeModulesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ProposeModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const proposeModules = useCallback(
    function proposeModules(...args: ProposeModulesMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildProposeModulesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const proposeModulesAsync = useCallback(
    function proposeModulesAsync(...args: ProposeModulesMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildProposeModulesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { proposeModules, proposeModulesAsync, ...restOutput }
}
