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
  Parameters<AccountWalletClient['sendFunds']>[0]
>

export type UseSendFundsParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, WithdrawMutation>
}

export type UseWithdrawParameters = UseSendFundsParameters

/**
 * Hook to send funds from an Account.
 * @param options send funds options.
 */
export function useSendFunds({
  accountId,
  chainName,
  mutation,
}: UseSendFundsParameters): UseMutationReturnType<
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
    ['sendFunds', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.sendFunds({ ...args, ...cosmWasmSignOptions })
    },
    mutation,
  )
}

/**
 * @deprecated use `useSendFunds` instead.
 */
export const useWithdraw = useSendFunds
