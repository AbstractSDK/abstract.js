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

export function useUseSendFundsToRemote({
  accountId,
  chainName,
  mutation,
}: UseSendFundsToRemoteParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.sendFundsToRemote({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
