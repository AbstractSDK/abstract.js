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

type ExecuteMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['installModules']>[0]
>

export type UseExecuteParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<DeliverTxResponse, unknown, ExecuteMutation>
}

/**
 * Install modules on an account.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useInstallModules({
  accountId,
  chainName,
  mutation,
}: UseExecuteParameters): UseMutationReturnType<
  DeliverTxResponse,
  unknown,
  ExecuteMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })
  return useMutation(
    ['installModules', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('client is not defined')
      return accountClient.installModules({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
