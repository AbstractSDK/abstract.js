import { Cw4GroupExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateAdminMsg = Extract<
  ReturnType<typeof Cw4GroupExecuteMsgBuilder.updateAdmin>,
  { update_admin: unknown }
>

type UpdateAdminMsgBuilderParameters = Parameters<
  typeof Cw4GroupExecuteMsgBuilder.updateAdmin
>

type UseUpdateAdminArgs = Parameters<
  typeof useExecuteContract<UpdateAdminMsg>
>[0]

function buildUpdateAdminMsg(
  ...args: UpdateAdminMsgBuilderParameters
): UpdateAdminMsg {
  return Cw4GroupExecuteMsgBuilder.updateAdmin(...args) as UpdateAdminMsg
}

export function useUpdateAdmin({
  contractAddress,
  ...restInput
}: UseUpdateAdminArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAdminMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAdmin = React.useCallback(
    function updateAdmin(...args: UpdateAdminMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateAdminMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateAdminAsync = React.useCallback(
    function updateAdminAsync(...args: UpdateAdminMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateAdminMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateAdmin, updateAdminAsync, ...restOutput }
}
