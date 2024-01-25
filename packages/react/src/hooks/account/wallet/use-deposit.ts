import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseAccountIdArgs } from '../utils'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

export function useDeposit(
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation>
export function useDeposit(
  abstractOptions: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation>
/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  arg1:
    | { accountId: AccountId | undefined }
    | UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>
    | undefined,
  arg2?: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
) {
  const { accountId, options } = parseAccountIdArgs(arg1, arg2)
  const config = useConfig()
  const { accountId: finalAccountId } = useAccountId({ accountId })
  const accountWalletClient = config.useAccountWalletClient({
    chainName: finalAccountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.deposit(rest)
  }, options)
}
