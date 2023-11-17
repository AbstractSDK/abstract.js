import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type AddAccountMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.addAccount>,
  { add_account: unknown }
>

type AddAccountMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.addAccount
>

type UseAddAccountArgs = Parameters<typeof useExecuteContract<AddAccountMsg>>[0]

function buildAddAccountMsg(
  ...args: AddAccountMsgBuilderParameters
): AddAccountMsg {
  return RegistryExecuteMsgBuilder.addAccount(...args) as AddAccountMsg
}

export function useAddAccount({
  contractAddress,
  ...restInput
}: UseAddAccountArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AddAccountMsg>({
      contractAddress,
      ...restInput,
    })

  const addAccount = useCallback(
    function addAccount(...args: AddAccountMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildAddAccountMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const addAccountAsync = useCallback(
    function addAccountAsync(...args: AddAccountMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildAddAccountMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { addAccount, addAccountAsync, ...restOutput }
}
