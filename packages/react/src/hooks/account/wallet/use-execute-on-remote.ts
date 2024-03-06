import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParameters } from '../utils'

type CreateRemoteAccountMutation = Parameters<
  AccountWalletClient['executeOnRemote']
>[0]

type UseCreateRemoteAccountMutationOptions = Omit<
  UseMutationOptions<DeliverTxResponse, unknown, CreateRemoteAccountMutation>,
  'mutationFn'
>

export function useExecuteOnRemote(
  { accountId }: { accountId: AccountId | undefined },
  options?: UseCreateRemoteAccountMutationOptions,
): UseMutationResult<DeliverTxResponse, unknown, CreateRemoteAccountMutation>
export function useExecuteOnRemote(
  options?: UseCreateRemoteAccountMutationOptions,
): UseMutationResult<DeliverTxResponse, unknown, CreateRemoteAccountMutation>

export function useExecuteOnRemote(
  arg1?:
    | { accountId: AccountId | undefined }
    | UseCreateRemoteAccountMutationOptions,
  arg2?: UseCreateRemoteAccountMutationOptions,
) {
  const { accountId: accountIdParameter, options } = parseParameters(arg1, arg2)
  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    accountId,
    chainName: accountId?.chainName,
  })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.executeOnRemote(parameters)
  }, options)
}