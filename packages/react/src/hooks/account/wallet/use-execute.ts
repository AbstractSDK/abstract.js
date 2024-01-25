import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseAccountIdArgs } from '../utils'

type ExecuteMutation = Parameters<AccountWalletClient['execute']>[0]

export function useExecute(
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, ExecuteMutation>
export function useExecute(
  abstractOptions: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, ExecuteMutation>
export function useExecute(
  arg1:
    | { accountId: AccountId | undefined }
    | UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>
    | undefined,
  arg2?: UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
): UseMutationResult<DeliverTxResponse, unknown, ExecuteMutation> {
  const { accountId, options } = parseAccountIdArgs(arg1, arg2)
  const config = useConfig()
  const { accountId: finalAccountId } = useAccountId({ accountId })
  const accountWalletClient = config.useAccountWalletClient({
    chainName: finalAccountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.execute(rest)
  }, options)
}
