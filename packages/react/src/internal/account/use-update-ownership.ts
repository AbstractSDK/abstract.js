import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateOwnershipMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateOwnership>,
  { update_ownership: unknown }
>

type UpdateOwnershipMsgBuilderParameters = {
  action: Parameters<typeof ManagerExecuteMsgBuilder.updateOwnership>[0]
}

type UseUpdateOwnershipArgs = Parameters<
  typeof useExecuteContract<UpdateOwnershipMsg>
>[0]

function buildUpdateOwnershipMsg(
  args: UpdateOwnershipMsgBuilderParameters,
): UpdateOwnershipMsg {
  return ManagerExecuteMsgBuilder.updateOwnership(
    args.action,
  ) as UpdateOwnershipMsg
}

export function useUpdateOwnership({
  contractAddress,
  ...restInput
}: UseUpdateOwnershipArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateOwnershipMsg>({
      contractAddress,
      ...restInput,
    })

  const updateOwnership = React.useCallback(
    function updateOwnership({
      senderAddress,
      signingClient,
      ...args
    }: UpdateOwnershipMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateOwnershipMsg(args),
      })
    },
    [executeContract],
  )

  const updateOwnershipAsync = React.useCallback(
    function updateOwnershipAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateOwnershipMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateOwnershipMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateOwnership, updateOwnershipAsync, ...restOutput }
}
