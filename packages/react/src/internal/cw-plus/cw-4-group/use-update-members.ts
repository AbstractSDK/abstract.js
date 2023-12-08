import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateMembersMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.updateMembers>,
  { update_members: unknown }
>

type UpdateMembersMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.updateMembers
>[0]

type UseUpdateMembersArgs = Parameters<
  typeof useExecuteContract<UpdateMembersMsg>
>[0]

function buildUpdateMembersMsg(
  args: UpdateMembersMsgBuilderParameters,
): UpdateMembersMsg {
  return Cw4GroupExecuteMsgBuilder.updateMembers(args) as UpdateMembersMsg
}

export function useUpdateMembers({
  contractAddress,
  ...restInput
}: UseUpdateMembersArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMembersMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMembers = React.useCallback(
    function updateMembers({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMembersMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateMembersMsg(args),
      })
    },
    [executeContract],
  )

  const updateMembersAsync = React.useCallback(
    function updateMembersAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMembersMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateMembersMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateMembers, updateMembersAsync, ...restOutput }
}
