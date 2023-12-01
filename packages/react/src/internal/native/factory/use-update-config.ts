import { FactoryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateConfigMsg = Extract<
  ReturnType<typeof FactoryExecuteMsgBuilder.updateConfig>,
  { update_config: unknown }
>

type UpdateConfigMsgBuilderParameters = Parameters<
  typeof FactoryExecuteMsgBuilder.updateConfig
>[0]

type UseUpdateConfigArgs = Parameters<
  typeof useExecuteContract<UpdateConfigMsg>
>[0]

function buildUpdateConfigMsg(
  args: UpdateConfigMsgBuilderParameters,
): UpdateConfigMsg {
  return FactoryExecuteMsgBuilder.updateConfig(args) as UpdateConfigMsg
}

export function useUpdateConfig({
  contractAddress,
  ...restInput
}: UseUpdateConfigArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateConfigMsg>({
      contractAddress,
      ...restInput,
    })

  const updateConfig = React.useCallback(
    function updateConfig({
      senderAddress,
      signingClient,
      ...args
    }: UpdateConfigMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateConfigMsg(args),
      })
    },
    [executeContract],
  )

  const updateConfigAsync = React.useCallback(
    function updateConfigAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateConfigMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateConfigMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateConfig, updateConfigAsync, ...restOutput }
}
