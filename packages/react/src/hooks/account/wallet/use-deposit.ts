import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  options: UseMutationOptions<DeliverTxResponse, unknown, DepositMutation> = {},
) {
  const config = useConfig()
  const { accountId } = useAccountId()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.deposit(rest)
  }, options)
}
