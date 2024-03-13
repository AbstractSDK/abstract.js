import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type WithdrawMutation = Parameters<AccountWalletClient['withdraw']>[0]

export type UseWithdrawParameters = {
  accountId: AccountId | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, WithdrawMutation>
}

/**
 * Hook to withdraw to an Account.
 * @param options withdraw options.
 */
export function useWithdraw({
  accountId,
  mutation,
}: UseWithdrawParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  WithdrawMutation
> {
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
    accountId,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.withdraw(rest)
  }, mutation)
}
