import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type WithdrawMutation = {
  accountWalletClient: AccountWalletClient
  args: Parameters<AccountWalletClient['withdraw']>
}

/**
 * Hook to withdraw from an Account.
 * @param options withdraw options.
 */
export function useWithdraw(
  options: UseMutationOptions<DeliverTxResponse, Error, WithdrawMutation> = {},
) {
  return useMutation(
    ({ accountWalletClient, args }) => accountWalletClient.withdraw(...args),
    options,
  )
}
