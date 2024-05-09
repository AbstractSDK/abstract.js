import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UseRequestRemoteFundsMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['requestFundsFromRemote']>[0]
>

export type UseRequestRemoteFundsParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['requestFundsFromRemote']>>,
    unknown,
    UseRequestRemoteFundsMutation
  >
}

export function useRequestRemoteFunds({
  accountId,
  chainName,
  mutation,
}: UseRequestRemoteFundsParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.requestFundsFromRemote({
      ...cosmWasmSignOptions,
      ...args,
    })
  }, mutation)
}
