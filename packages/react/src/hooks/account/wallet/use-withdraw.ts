import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'

type WithdrawMutation = Parameters<AccountWalletClient['withdraw']>[0]

/**
 * Hook to withdraw from an Account.
 * @param options withdraw options.
 */
export function useWithdraw(
  options: UseMutationOptions<DeliverTxResponse, Error, WithdrawMutation> = {},
) {
  const config = useConfig()
  const { accountId } = useAccountId()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.withdraw(rest)
  }, options)
}
