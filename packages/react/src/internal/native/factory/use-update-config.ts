import { FactoryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateConfigMsg = Extract<
  ReturnType<typeof FactoryExecuteMsgBuilder.updateConfig>,
  { update_config: unknown }
>

type UpdateConfigMsgBuilderParameters = Parameters<
  typeof FactoryExecuteMsgBuilder.updateConfig
>

type UseUpdateConfigArgs = Parameters<
  typeof useExecuteContract<UpdateConfigMsg>
>[0]

function buildUpdateConfigMsg(
  ...args: UpdateConfigMsgBuilderParameters
): UpdateConfigMsg {
  return FactoryExecuteMsgBuilder.updateConfig(...args) as UpdateConfigMsg
}

export function useUpdateConfig({
  contractAddress,
  ...restInput
}: UseUpdateConfigArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateConfigMsg>({
      contractAddress,
      ...restInput,
    })

  const updateConfig = useCallback(
    function updateConfig(...args: UpdateConfigMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateConfigMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateConfigAsync = useCallback(
    function updateConfigAsync(...args: UpdateConfigMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateConfigMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateConfig, updateConfigAsync, ...restOutput }
}
