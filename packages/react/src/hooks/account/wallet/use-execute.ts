import { AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'

type ExecuteMutation = Parameters<AccountWalletClient['execute']>[0]

/**
 * Hook to execute a transaction on an Account.
 * @param options execute options.
 */
export function useExecute(
  options: UseMutationOptions<DeliverTxResponse, Error, ExecuteMutation> = {},
) {
  const config = useConfig()
  const { accountId } = useAccountId()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.execute(rest)
  }, options)
}
