import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type WithdrawMutation = {
  accountWalletClient: AccountWalletClient
} & Parameters<AccountWalletClient['withdraw']>[0]

/**
 * Hook to withdraw from an Account.
 * @param options withdraw options.
 */
export function useWithdraw(
  options: UseMutationOptions<DeliverTxResponse, Error, WithdrawMutation> = {},
) {
  return useMutation(
    ({ accountWalletClient, ...rest }) => accountWalletClient.withdraw(rest),
    options,
  )
}
