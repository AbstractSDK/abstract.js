import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateSettingsMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateSettings>,
  { update_settings: unknown }
>

type UpdateSettingsMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateSettings
>[0]

type UseUpdateSettingsArgs = Parameters<
  typeof useExecuteContract<UpdateSettingsMsg>
>[0]

function buildUpdateSettingsMsg(
  args: UpdateSettingsMsgBuilderParameters,
): UpdateSettingsMsg {
  return ManagerExecuteMsgBuilder.updateSettings(args) as UpdateSettingsMsg
}

export function useUpdateSettings({
  contractAddress,
  ...restInput
}: UseUpdateSettingsArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateSettingsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateSettings = React.useCallback(
    function updateSettings({
      senderAddress,
      signingClient,
      ...args
    }: UpdateSettingsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateSettingsMsg(args),
      })
    },
    [executeContract],
  )

  const updateSettingsAsync = React.useCallback(
    function updateSettingsAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateSettingsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateSettingsMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateSettings, updateSettingsAsync, ...restOutput }
}
