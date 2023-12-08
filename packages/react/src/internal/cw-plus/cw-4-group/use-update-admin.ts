import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateAdminMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.updateAdmin>,
  { update_admin: unknown }
>

type UpdateAdminMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.updateAdmin
>[0]

type UseUpdateAdminArgs = Parameters<
  typeof useExecuteContract<UpdateAdminMsg>
>[0]

function buildUpdateAdminMsg(
  args: UpdateAdminMsgBuilderParameters,
): UpdateAdminMsg {
  return Cw4GroupExecuteMsgBuilder.updateAdmin(args) as UpdateAdminMsg
}

export function useUpdateAdmin({
  contractAddress,
  ...restInput
}: UseUpdateAdminArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAdminMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAdmin = React.useCallback(
    function updateAdmin({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAdminMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateAdminMsg(args),
      })
    },
    [executeContract],
  )

  const updateAdminAsync = React.useCallback(
    function updateAdminAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAdminMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateAdminMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateAdmin, updateAdminAsync, ...restOutput }
}
