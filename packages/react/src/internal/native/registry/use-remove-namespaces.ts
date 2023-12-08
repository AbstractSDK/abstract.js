import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type RemoveNamespacesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.removeNamespaces>,
  { remove_namespaces: unknown }
>

type RemoveNamespacesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.removeNamespaces
>[0]

type UseRemoveNamespacesArgs = Parameters<
  typeof useExecuteContract<RemoveNamespacesMsg>
>[0]

function buildRemoveNamespacesMsg(
  args: RemoveNamespacesMsgBuilderParameters,
): RemoveNamespacesMsg {
  return RegistryExecuteMsgBuilder.removeNamespaces(args) as RemoveNamespacesMsg
}

export function useRemoveNamespaces({
  contractAddress,
  ...restInput
}: UseRemoveNamespacesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveNamespacesMsg>({
      contractAddress,
      ...restInput,
    })

  const removeNamespaces = React.useCallback(
    function removeNamespaces({
      senderAddress,
      signingClient,
      ...args
    }: RemoveNamespacesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildRemoveNamespacesMsg(args),
      })
    },
    [executeContract],
  )

  const removeNamespacesAsync = React.useCallback(
    function removeNamespacesAsync({
      senderAddress,
      signingClient,
      ...args
    }: RemoveNamespacesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildRemoveNamespacesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { removeNamespaces, removeNamespacesAsync, ...restOutput }
}
