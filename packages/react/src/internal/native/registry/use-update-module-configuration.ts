import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateModuleConfigurationMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.updateModuleConfiguration>,
  { update_module_configuration: unknown }
>

type UpdateModuleConfigurationMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.updateModuleConfiguration
>[0]

type UseUpdateModuleConfigurationArgs = Parameters<
  typeof useExecuteContract<UpdateModuleConfigurationMsg>
>[0]

function buildUpdateModuleConfigurationMsg(
  args: UpdateModuleConfigurationMsgBuilderParameters,
): UpdateModuleConfigurationMsg {
  return RegistryExecuteMsgBuilder.updateModuleConfiguration(
    args,
  ) as UpdateModuleConfigurationMsg
}

export function useUpdateModuleConfiguration({
  contractAddress,
  ...restInput
}: UseUpdateModuleConfigurationArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateModuleConfigurationMsg>({
      contractAddress,
      ...restInput,
    })

  const updateModuleConfiguration = React.useCallback(
    function updateModuleConfiguration({
      senderAddress,
      signingClient,
      ...args
    }: UpdateModuleConfigurationMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateModuleConfigurationMsg(args),
      })
    },
    [executeContract],
  )

  const updateModuleConfigurationAsync = React.useCallback(
    function updateModuleConfigurationAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateModuleConfigurationMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateModuleConfigurationMsg(args),
      })
    },
    [executeContractAsync],
  )

  return {
    updateModuleConfiguration,
    updateModuleConfigurationAsync,
    ...restOutput,
  }
}
