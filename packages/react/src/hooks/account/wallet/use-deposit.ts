import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type DepositMutation = {
  accountWalletClient: AccountWalletClient
} & Parameters<AccountWalletClient['deposit']>[0]

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  options: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation> = {},
) {
  return useMutation(
    ({ accountWalletClient, ...rest }) => accountWalletClient.deposit(rest),
    options,
  )
}
