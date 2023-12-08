import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateStatusMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateStatus>,
  { update_status: unknown }
>

type UpdateStatusMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateStatus
>[0]

type UseUpdateStatusArgs = Parameters<
  typeof useExecuteContract<UpdateStatusMsg>
>[0]

function buildUpdateStatusMsg(
  args: UpdateStatusMsgBuilderParameters,
): UpdateStatusMsg {
  return ManagerExecuteMsgBuilder.updateStatus(args) as UpdateStatusMsg
}

export function useUpdateStatus({
  contractAddress,
  ...restInput
}: UseUpdateStatusArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateStatusMsg>({
      contractAddress,
      ...restInput,
    })

  const updateStatus = React.useCallback(
    function updateStatus({
      senderAddress,
      signingClient,
      ...args
    }: UpdateStatusMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateStatusMsg(args),
      })
    },
    [executeContract],
  )

  const updateStatusAsync = React.useCallback(
    function updateStatusAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateStatusMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateStatusMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateStatus, updateStatusAsync, ...restOutput }
}
