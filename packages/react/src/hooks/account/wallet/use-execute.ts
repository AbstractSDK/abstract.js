import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type ExecuteMutation = Parameters<AccountWalletClient['execute']>[0]

export type UseExecuteParameters = {
  accountId: AccountId | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, ExecuteMutation>
}
export function useExecute({
  accountId,
  mutation,
}: UseExecuteParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  ExecuteMutation
> {
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
    accountId,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.execute(rest)
  }, mutation)
}
