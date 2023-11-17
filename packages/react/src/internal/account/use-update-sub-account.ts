import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UpdateSubAccountMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateSubAccount>,
  { update_sub_account: unknown }
>

type UpdateSubAccountMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateSubAccount
>

type UseUpdateSubAccountArgs = Parameters<
  typeof useExecuteContract<UpdateSubAccountMsg>
>[0]

function buildUpdateSubAccountMsg(
  ...args: UpdateSubAccountMsgBuilderParameters
): UpdateSubAccountMsg {
  return ManagerExecuteMsgBuilder.updateSubAccount(
    ...args,
  ) as UpdateSubAccountMsg
}

export function useUpdateSubAccount({
  contractAddress,
  ...restInput
}: UseUpdateSubAccountArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateSubAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const updateSubAccount = useCallback(
    function updateSubAccount(...args: UpdateSubAccountMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateSubAccountMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateSubAccountAsync = useCallback(
    function updateSubAccountAsync(
      ...args: UpdateSubAccountMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateSubAccountMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateSubAccount, updateSubAccountAsync, ...restOutput }
}
