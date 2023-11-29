import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateInfoMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateInfo>,
  { update_info: unknown }
>

type UpdateInfoMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateInfo
>

type UseUpdateInfoArgs = Parameters<typeof useExecuteContract<UpdateInfoMsg>>[0]

function buildUpdateInfoMsg(
  ...args: UpdateInfoMsgBuilderParameters
): UpdateInfoMsg {
  return ManagerExecuteMsgBuilder.updateInfo(...args) as UpdateInfoMsg
}

export function useUpdateInfo({
  contractAddress,
  ...restInput
}: UseUpdateInfoArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateInfoMsg>({
      contractAddress,
      ...restInput,
    })

  const updateInfo = React.useCallback(
    function updateInfo(...args: UpdateInfoMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateInfoMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateInfoAsync = React.useCallback(
    function updateInfoAsync(...args: UpdateInfoMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateInfoMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateInfo, updateInfoAsync, ...restOutput }
}
