import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateAdminMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.updateAdmin>,
  { update_admin: unknown }
>

type UpdateAdminMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.updateAdmin
>

type UseUpdateAdminArgs = Parameters<
  typeof useExecuteContract<UpdateAdminMsg>
>[0]

function buildUpdateAdminMsg(
  ...args: UpdateAdminMsgBuilderParameters
): UpdateAdminMsg {
  return Cw20IcsExecuteMsgBuilder.updateAdmin(...args) as UpdateAdminMsg
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

  const updateAdmin = useCallback(
    function updateAdmin(...args: UpdateAdminMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateAdminMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateAdminAsync = useCallback(
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
