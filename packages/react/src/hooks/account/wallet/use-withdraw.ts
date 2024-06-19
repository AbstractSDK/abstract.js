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

type WithdrawMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['withdraw']>[0]
>

export type UseWithdrawParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, WithdrawMutation>
}

/**
 * Hook to withdraw to an Account.
 * @param options withdraw options.
 */
export function useWithdraw({
  accountId,
  chainName,
  mutation,
}: UseWithdrawParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  WithdrawMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })
  return useMutation(
    ['withdraw', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.withdraw({ ...args, ...cosmWasmSignOptions })
    },
    mutation,
  )
}
