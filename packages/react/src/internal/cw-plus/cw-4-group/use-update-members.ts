import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateMembersMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.updateMembers>,
  { update_members: unknown }
>

type UpdateMembersMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.updateMembers
>

type UseUpdateMembersArgs = Parameters<
  typeof useExecuteContract<UpdateMembersMsg>
>[0]

function buildUpdateMembersMsg(
  ...args: UpdateMembersMsgBuilderParameters
): UpdateMembersMsg {
  return Cw4GroupExecuteMsgBuilder.updateMembers(...args) as UpdateMembersMsg
}

export function useUpdateMembers({
  contractAddress,
  ...restInput
}: UseUpdateMembersArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMembersMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMembers = React.useCallback(
    function updateMembers(...args: UpdateMembersMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateMembersMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateMembersAsync = React.useCallback(
    function updateMembersAsync(...args: UpdateMembersMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateMembersMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateMembers, updateMembersAsync, ...restOutput }
}
