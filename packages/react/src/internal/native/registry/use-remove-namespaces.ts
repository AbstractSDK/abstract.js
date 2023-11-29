import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type RemoveNamespacesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.removeNamespaces>,
  { remove_namespaces: unknown }
>

type RemoveNamespacesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.removeNamespaces
>

type UseRemoveNamespacesArgs = Parameters<
  typeof useExecuteContract<RemoveNamespacesMsg>
>[0]

function buildRemoveNamespacesMsg(
  ...args: RemoveNamespacesMsgBuilderParameters
): RemoveNamespacesMsg {
  return RegistryExecuteMsgBuilder.removeNamespaces(
    ...args,
  ) as RemoveNamespacesMsg
}

export function useRemoveNamespaces({
  contractAddress,
  ...restInput
}: UseRemoveNamespacesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<RemoveNamespacesMsg>({
      contractAddress,
      ...restInput,
    })

  const removeNamespaces = React.useCallback(
    function removeNamespaces(...args: RemoveNamespacesMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildRemoveNamespacesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const removeNamespacesAsync = React.useCallback(
    function removeNamespacesAsync(
      ...args: RemoveNamespacesMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildRemoveNamespacesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { removeNamespaces, removeNamespacesAsync, ...restOutput }
}
