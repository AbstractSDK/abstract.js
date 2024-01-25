import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'

type ExecuteMutation = Parameters<AccountWalletClient['execute']>[0]

export function useExecute(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, ExecuteMutation>,
    'mutationFn'
  >,
) {
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.execute(rest)
  }, options)
}
