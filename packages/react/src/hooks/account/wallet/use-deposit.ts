import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParameters } from '../utils'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

export function useDeposit(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation>
export function useDeposit(
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
  arg1?:
    | { accountId: AccountId | undefined }
    | Omit<
        UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
        'mutationFn'
      >,
  arg2?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation> {
  const { accountId: accountIdParameter, options } = parseParameters(arg1, arg2)
  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    accountId,
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.deposit(rest)
  }, options)
}
