import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useConfig } from '../../../contexts'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation> {
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
