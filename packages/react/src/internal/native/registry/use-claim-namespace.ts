import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ClaimNamespaceMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.claimNamespace>,
  { claim_namespace: unknown }
>

type ClaimNamespaceMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.claimNamespace
>[0]

type UseClaimNamespaceArgs = Parameters<
  typeof useExecuteContract<ClaimNamespaceMsg>
>[0]

function buildClaimNamespaceMsg(
  args: ClaimNamespaceMsgBuilderParameters,
): ClaimNamespaceMsg {
  return RegistryExecuteMsgBuilder.claimNamespace(args) as ClaimNamespaceMsg
}

export function useClaimNamespace({
  contractAddress,
  ...restInput
}: UseClaimNamespaceArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ClaimNamespaceMsg>({
      contractAddress,
      ...restInput,
    })

  const claimNamespace = React.useCallback(
    function claimNamespace({
      senderAddress,
      signingClient,
      ...args
    }: ClaimNamespaceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildClaimNamespaceMsg(args),
      })
    },
    [executeContract],
  )

  const claimNamespaceAsync = React.useCallback(
    function claimNamespaceAsync({
      senderAddress,
      signingClient,
      ...args
    }: ClaimNamespaceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildClaimNamespaceMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { claimNamespace, claimNamespaceAsync, ...restOutput }
}
