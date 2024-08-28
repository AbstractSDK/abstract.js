import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UseSendFundsToRemoteMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['sendFundsToRemote']>[0]
>

export type UseSendFundsToRemoteParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['sendFundsToRemote']>>,
    unknown,
    UseSendFundsToRemoteMutation
  >
}

export function useSendFundsToRemote({
  accountId,
  chainName,
  mutation,
}: UseSendFundsToRemoteParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['sendFundsToRemote', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.sendFundsToRemote({
        ...cosmWasmSignOptions,
        ...args,
      })
    },
    mutation,
  )
}

/**
 * @deprecated Use `useSendFundsToRemote` instead.
 */
export const useUseSendFundsToRemote = useSendFundsToRemote
