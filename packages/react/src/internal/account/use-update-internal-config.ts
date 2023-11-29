import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateInternalConfigMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateInternalConfig>,
  { update_internal_config: unknown }
>

type UpdateInternalConfigMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateInternalConfig
>

type UseUpdateInternalConfigArgs = Parameters<
  typeof useExecuteContract<UpdateInternalConfigMsg>
>[0]

function buildUpdateInternalConfigMsg(
  ...args: UpdateInternalConfigMsgBuilderParameters
): UpdateInternalConfigMsg {
  return ManagerExecuteMsgBuilder.updateInternalConfig(
    ...args,
  ) as UpdateInternalConfigMsg
}

export function useUpdateInternalConfig({
  contractAddress,
  ...restInput
}: UseUpdateInternalConfigArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateInternalConfigMsg>({
      contractAddress,
      ...restInput,
    })

  const updateInternalConfig = React.useCallback(
    function updateInternalConfig(
      ...args: UpdateInternalConfigMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildUpdateInternalConfigMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateInternalConfigAsync = React.useCallback(
    function updateInternalConfigAsync(
      ...args: UpdateInternalConfigMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateInternalConfigMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateInternalConfig, updateInternalConfigAsync, ...restOutput }
}
