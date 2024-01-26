import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParameters } from '../utils'

type ExecuteMutation = Parameters<AccountWalletClient['execute']>[0]

export function useExecute(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, ExecuteMutation>
export function useExecute(
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, ExecuteMutation>
export function useExecute(
  arg1?:
    | { accountId: AccountId | undefined }
    | Omit<
        UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
        'mutationFn'
      >,
  arg2?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
) {
  const { accountId: accountIdParameter, options } = parseParameters(arg1, arg2)
  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.execute(rest)
  }, options)
}
