import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseAccountIdArgs } from '../utils'

type WithdrawMutation = Parameters<AccountWalletClient['withdraw']>[0]

export function useWithdraw(
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, WithdrawMutation>
export function useWithdraw(
  abstractOptions: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, WithdrawMutation>
/**
 * Hook to withdraw to an Account.
 * @param options withdraw options.
 */
export function useWithdraw(
  arg1:
    | { accountId: AccountId | undefined }
    | UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>
    | undefined,
  arg2?: UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
) {
  const { accountId, options } = parseAccountIdArgs(arg1, arg2)
  const config = useConfig()
  const { accountId: finalAccountId } = useAccountId({ accountId })
  const accountWalletClient = config.useAccountWalletClient({
    chainName: finalAccountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.withdraw(rest)
  }, options)
}
