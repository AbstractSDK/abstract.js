import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type CreateSubAccountMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.createSubAccount>,
  { create_sub_account: unknown }
>

type CreateSubAccountMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.createSubAccount
>

type UseCreateSubAccountArgs = Parameters<
  typeof useExecuteContract<CreateSubAccountMsg>
>[0]

function buildCreateSubAccountMsg(
  ...args: CreateSubAccountMsgBuilderParameters
): CreateSubAccountMsg {
  return ManagerExecuteMsgBuilder.createSubAccount(
    ...args,
  ) as CreateSubAccountMsg
}

export function useCreateSubAccount({
  contractAddress,
  ...restInput
}: UseCreateSubAccountArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CreateSubAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const createSubAccount = React.useCallback(
    function createsubaccount(...args: CreateSubAccountMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildCreateSubAccountMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const createSubAccountAsync = React.useCallback(
    function createsubaccountAsync(
      ...args: CreateSubAccountMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildCreateSubAccountMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { createSubAccount, createSubAccountAsync, ...restOutput }
}
