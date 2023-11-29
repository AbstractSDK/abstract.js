import { FactoryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type CreateAccountMsg = Extract<
  ReturnType<typeof FactoryExecuteMsgBuilder.createAccount>,
  { create_account: unknown }
>

type CreateAccountMsgBuilderParameters = Parameters<
  typeof FactoryExecuteMsgBuilder.createAccount
>

type UseCreateAccountArgs = Parameters<
  typeof useExecuteContract<CreateAccountMsg>
>[0]

function buildCreateAccountMsg(
  ...args: CreateAccountMsgBuilderParameters
): CreateAccountMsg {
  return FactoryExecuteMsgBuilder.createAccount(...args) as CreateAccountMsg
}

export function useCreateAccount({
  contractAddress,
  ...restInput
}: UseCreateAccountArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const createAccount = React.useCallback(
    function createAccount(...args: CreateAccountMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildCreateAccountMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const createAccountAsync = React.useCallback(
    function createAccountAsync(...args: CreateAccountMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildCreateAccountMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { createAccount, createAccountAsync, ...restOutput }
}
