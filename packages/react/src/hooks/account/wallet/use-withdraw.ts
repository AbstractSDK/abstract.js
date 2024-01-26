import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParameters } from '../utils'

type WithdrawMutation = Parameters<AccountWalletClient['withdraw']>[0]

export function useWithdraw(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, WithdrawMutation>
export function useWithdraw(
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
  arg1?:
    | { accountId: AccountId | undefined }
    | Omit<
        UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
        'mutationFn'
      >,
  arg2?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
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
    return accountWalletClient.withdraw(rest)
  }, options)
}
