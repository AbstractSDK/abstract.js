import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type DepositMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['deposit']>[0]
>

export type UseDepositParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, DepositMutation>
}

/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit({
  accountId,
  chainName,
  mutation,
}: UseDepositParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  DepositMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    accountId,
    chainName,
  })
  return useMutation(
    ['deposit', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('client is not defined')
      return accountClient.deposit({ ...args, ...cosmWasmSignOptions })
    },
    mutation,
  )
}
