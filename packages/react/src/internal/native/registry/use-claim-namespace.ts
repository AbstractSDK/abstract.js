import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ClaimNamespaceMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.claimNamespace>,
  { claim_namespace: unknown }
>

type ClaimNamespaceMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.claimNamespace
>

type UseClaimNamespaceArgs = Parameters<
  typeof useExecuteContract<ClaimNamespaceMsg>
>[0]

function buildClaimNamespaceMsg(
  ...args: ClaimNamespaceMsgBuilderParameters
): ClaimNamespaceMsg {
  return RegistryExecuteMsgBuilder.claimNamespace(...args) as ClaimNamespaceMsg
}

export function useClaimNamespace({
  contractAddress,
  ...restInput
}: UseClaimNamespaceArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ClaimNamespaceMsg>({
      contractAddress,
      ...restInput,
    })

  const claimNamespace = useCallback(
    function claimNamespace(...args: ClaimNamespaceMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildClaimNamespaceMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const claimNamespaceAsync = useCallback(
    function claimNamespaceAsync(...args: ClaimNamespaceMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildClaimNamespaceMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { claimNamespace, claimNamespaceAsync, ...restOutput }
}
