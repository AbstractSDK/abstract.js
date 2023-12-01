import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateInfoMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateInfo>,
  { update_info: unknown }
>

type UpdateInfoMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateInfo
>[0]

type UseUpdateInfoArgs = Parameters<typeof useExecuteContract<UpdateInfoMsg>>[0]

function buildUpdateInfoMsg(
  args: UpdateInfoMsgBuilderParameters,
): UpdateInfoMsg {
  return ManagerExecuteMsgBuilder.updateInfo(args) as UpdateInfoMsg
}

export function useUpdateInfo({
  contractAddress,
  ...restInput
}: UseUpdateInfoArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateInfoMsg>({
      contractAddress,
      ...restInput,
    })

  const updateInfo = React.useCallback(
    function updateInfo({
      senderAddress,
      signingClient,
      ...args
    }: UpdateInfoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateInfoMsg(args),
      })
    },
    [executeContract],
  )

  const updateInfoAsync = React.useCallback(
    function updateInfoAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateInfoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateInfoMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateInfo, updateInfoAsync, ...restOutput }
}
