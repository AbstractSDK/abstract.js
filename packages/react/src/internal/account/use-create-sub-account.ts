import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type CreateSubAccountMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.createSubAccount>,
  { create_sub_account: unknown }
>

type CreateSubAccountMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.createSubAccount
>[0]

type UseCreateSubAccountArgs = Parameters<
  typeof useExecuteContract<CreateSubAccountMsg>
>[0]

function buildCreateSubAccountMsg(
  args: CreateSubAccountMsgBuilderParameters,
): CreateSubAccountMsg {
  return ManagerExecuteMsgBuilder.createSubAccount(args) as CreateSubAccountMsg
}

export function useCreateSubAccount({
  contractAddress,
  ...restInput
}: UseCreateSubAccountArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateSubAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const createSubAccount = React.useCallback(
    function createsubaccount({
      senderAddress,
      signingClient,
      ...args
    }: CreateSubAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      if (!contractAddress) throw new Error('contractAddress is required')
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCreateSubAccountMsg(args),
      })
    },
    [executeContract],
  )

  const createSubAccountAsync = React.useCallback(
    function createsubaccountAsync({
      senderAddress,
      signingClient,
      ...args
    }: CreateSubAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCreateSubAccountMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { createSubAccount, createSubAccountAsync, ...restOutput }
}
