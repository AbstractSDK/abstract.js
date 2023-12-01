import { FactoryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type CreateAccountMsg = Extract<
  ReturnType<typeof FactoryExecuteMsgBuilder.createAccount>,
  { create_account: unknown }
>

type CreateAccountMsgBuilderParameters = Parameters<
  typeof FactoryExecuteMsgBuilder.createAccount
>[0]

type UseCreateAccountArgs = Parameters<
  typeof useExecuteContract<CreateAccountMsg>
>[0]

function buildCreateAccountMsg(
  args: CreateAccountMsgBuilderParameters,
): CreateAccountMsg {
  return FactoryExecuteMsgBuilder.createAccount(args) as CreateAccountMsg
}

export function useCreateAccount({
  contractAddress,
  ...restInput
}: UseCreateAccountArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const createAccount = React.useCallback(
    function createAccount({
      senderAddress,
      signingClient,
      ...args
    }: CreateAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildCreateAccountMsg(args),
      })
    },
    [executeContract],
  )

  const createAccountAsync = React.useCallback(
    function createAccountAsync({
      senderAddress,
      signingClient,
      ...args
    }: CreateAccountMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildCreateAccountMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { createAccount, createAccountAsync, ...restOutput }
}
