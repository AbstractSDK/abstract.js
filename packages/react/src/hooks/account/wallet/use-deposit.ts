import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type DepositMutation = {
  accountWalletClient: AccountWalletClient
  args: Parameters<AccountWalletClient['deposit']>
}

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  options: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation> = {},
) {
  return useMutation(
    ({ accountWalletClient, args }) => accountWalletClient.deposit(...args),
    options,
  )
}
