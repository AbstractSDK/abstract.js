import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateInternalConfigMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateInternalConfig>,
  { update_internal_config: unknown }
>

type UpdateInternalConfigMsgBuilderParameters = {
  config: Parameters<typeof ManagerExecuteMsgBuilder.updateInternalConfig>[0]
}

type UseUpdateInternalConfigArgs = Parameters<
  typeof useExecuteContract<UpdateInternalConfigMsg>
>[0]

function buildUpdateInternalConfigMsg(
  args: UpdateInternalConfigMsgBuilderParameters,
): UpdateInternalConfigMsg {
  return ManagerExecuteMsgBuilder.updateInternalConfig(
    args.config,
  ) as UpdateInternalConfigMsg
}

export function useUpdateInternalConfig({
  contractAddress,
  ...restInput
}: UseUpdateInternalConfigArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateInternalConfigMsg>({
      contractAddress,
      ...restInput,
    })

  const updateInternalConfig = React.useCallback(
    function updateInternalConfig({
      senderAddress,
      signingClient,
      ...args
    }: UpdateInternalConfigMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateInternalConfigMsg(args),
      })
    },
    [executeContract],
  )

  const updateInternalConfigAsync = React.useCallback(
    function updateInternalConfigAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateInternalConfigMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateInternalConfigMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateInternalConfig, updateInternalConfigAsync, ...restOutput }
}
