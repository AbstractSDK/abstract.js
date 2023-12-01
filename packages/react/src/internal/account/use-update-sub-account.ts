import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateSubAccountMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.updateSubAccount>,
  { update_sub_account: unknown }
>

type UpdateSubAccountMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.updateSubAccount
>[0]

type UseUpdateSubAccountArgs = Parameters<
  typeof useExecuteContract<UpdateSubAccountMsg>
>[0]

function buildUpdateSubAccountMsg(
  args: UpdateSubAccountMsgBuilderParameters,
): UpdateSubAccountMsg {
  return ManagerExecuteMsgBuilder.updateSubAccount(args) as UpdateSubAccountMsg
}

export function useUpdateSubAccount({
  contractAddress,
  ...restInput
}: UseUpdateSubAccountArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateSubAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const updateSubAccount = React.useCallback(
    function updateSubAccount({
      senderAddress,
      signingClient,
      ...args
    }: UpdateSubAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateSubAccountMsg(args),
      })
    },
    [executeContract],
  )

  const updateSubAccountAsync = React.useCallback(
    function updateSubAccountAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateSubAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateSubAccountMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateSubAccount, updateSubAccountAsync, ...restOutput }
}
