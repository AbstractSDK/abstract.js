import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateModuleConfigurationMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.updateModuleConfiguration>,
  { update_module_configuration: unknown }
>

type UpdateModuleConfigurationMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.updateModuleConfiguration
>

type UseUpdateModuleConfigurationArgs = Parameters<
  typeof useExecuteContract<UpdateModuleConfigurationMsg>
>[0]

function buildUpdateModuleConfigurationMsg(
  ...args: UpdateModuleConfigurationMsgBuilderParameters
): UpdateModuleConfigurationMsg {
  return RegistryExecuteMsgBuilder.updateModuleConfiguration(
    ...args,
  ) as UpdateModuleConfigurationMsg
}

export function useUpdateModuleConfiguration({
  contractAddress,
  ...restInput
}: UseUpdateModuleConfigurationArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateModuleConfigurationMsg>({
      contractAddress,
      ...restInput,
    })

  const updateModuleConfiguration = useCallback(
    function updateModuleConfiguration(
      ...args: UpdateModuleConfigurationMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildUpdateModuleConfigurationMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateModuleConfigurationAsync = useCallback(
    function updateModuleConfigurationAsync(
      ...args: UpdateModuleConfigurationMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateModuleConfigurationMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return {
    updateModuleConfiguration,
    updateModuleConfigurationAsync,
    ...restOutput,
  }
}
