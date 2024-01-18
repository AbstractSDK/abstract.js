import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type ExecuteMutation = {
  accountWalletClient: AccountWalletClient
  args: Parameters<AccountWalletClient['execute']>
}

/**
 * Hook to execute a transaction on an Account.
 * @param options execute options.
 */
export function useExecute(
  options: UseMutationOptions<DeliverTxResponse, Error, ExecuteMutation> = {},
) {
  return useMutation(
    ({ accountWalletClient, args }) => accountWalletClient.execute(...args),
    options,
  )
}
