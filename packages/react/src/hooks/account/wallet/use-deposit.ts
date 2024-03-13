import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

export type UseDepositParameters = {
  accountId: AccountId | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, DepositMutation>
}

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit({
  accountId,
  mutation,
}: UseDepositParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  DepositMutation
> {
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    accountId,
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.deposit(rest)
  }, mutation)
}
