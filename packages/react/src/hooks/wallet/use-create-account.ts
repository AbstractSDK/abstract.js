import { WalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'
import { UseMutationParameters } from '../../types/queries'

type CreateAccountMutation = Parameters<WalletClient['createAccount']>[0]

export type UseCreateAccount = {
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<WalletClient['createAccount']>>,
    unknown,
    CreateAccountMutation
  >
}

export function useCreateAccount({ chainName, mutation }: UseCreateAccount) {
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName: chainName })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createAccount(parameters)
  }, mutation)
}
