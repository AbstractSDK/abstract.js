import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateStatusMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateStatus>,
  { update_status: unknown }
>

type UpdateStatusMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateStatus
>

type UseUpdateStatusArgs = Parameters<
  typeof useExecuteContract<UpdateStatusMsg>
>[0]

function buildUpdateStatusMsg(
  ...args: UpdateStatusMsgBuilderParameters
): UpdateStatusMsg {
  return ManagerExecuteMsgBuilder.updateStatus(...args) as UpdateStatusMsg
}

export function useUpdateStatus({
  contractAddress,
  ...restInput
}: UseUpdateStatusArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateStatusMsg>({
      contractAddress,
      ...restInput,
    })

  const updateStatus = React.useCallback(
    function updateStatus(...args: UpdateStatusMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateStatusMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateStatusAsync = React.useCallback(
    function updateStatusAsync(...args: UpdateStatusMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateStatusMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateStatus, updateStatusAsync, ...restOutput }
}
