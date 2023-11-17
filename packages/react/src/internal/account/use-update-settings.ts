import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateSettingsMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateSettings>,
  { update_settings: unknown }
>

type UpdateSettingsMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateSettings
>

type UseUpdateSettingsArgs = Parameters<
  typeof useExecuteContract<UpdateSettingsMsg>
>[0]

function buildUpdateSettingsMsg(
  ...args: UpdateSettingsMsgBuilderParameters
): UpdateSettingsMsg {
  return ManagerExecuteMsgBuilder.updateSettings(...args) as UpdateSettingsMsg
}

export function useUpdateSettings({
  contractAddress,
  ...restInput
}: UseUpdateSettingsArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateSettingsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateSettings = useCallback(
    function updateSettings(...args: UpdateSettingsMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateSettingsMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateSettingsAsync = useCallback(
    function updateSettingsAsync(...args: UpdateSettingsMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateSettingsMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateSettings, updateSettingsAsync, ...restOutput }
}
