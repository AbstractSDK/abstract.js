import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type CreateRemoteAccountMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['createRemoteAccount']>[0]
>

export type UseCreateRemoteAccountParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['createRemoteAccount']>>,
    unknown,
    CreateRemoteAccountMutation
  >
}

export function useCreateRemoteAccount({
  accountId,
  chainName,
  mutation,
}: UseCreateRemoteAccountParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createRemoteAccount({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
