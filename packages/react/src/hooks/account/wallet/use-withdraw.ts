import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'

type WithdrawMutation = Parameters<AccountWalletClient['withdraw']>[0]

/**
 * Hook to withdraw to an Account.
 * @param options withdraw options.
 */
export function useWithdraw(
  { accountId }: { accountId: AccountId | undefined },
  options?: UseMutationOptions<DeliverTxResponse, unknown, WithdrawMutation>,
) {
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.withdraw(rest)
  }, options)
}
