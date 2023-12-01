import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type RemoveModuleMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.removeModule>,
  { remove_module: unknown }
>

type RemoveModuleMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.removeModule
>[0]

type UseRemoveModuleArgs = Parameters<
  typeof useExecuteContract<RemoveModuleMsg>
>[0]

function buildRemoveModuleMsg(
  args: RemoveModuleMsgBuilderParameters,
): RemoveModuleMsg {
  return RegistryExecuteMsgBuilder.removeModule(args) as RemoveModuleMsg
}

export function useRemoveModule({
  contractAddress,
  ...restInput
}: UseRemoveModuleArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const removeModule = React.useCallback(
    function removeModule({
      senderAddress,
      signingClient,
      ...args
    }: RemoveModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildRemoveModuleMsg(args),
      })
    },
    [executeContract],
  )

  const removeModuleAsync = React.useCallback(
    function removeModuleAsync({
      senderAddress,
      signingClient,
      ...args
    }: RemoveModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildRemoveModuleMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { removeModule, removeModuleAsync, ...restOutput }
}
