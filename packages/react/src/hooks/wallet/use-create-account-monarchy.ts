import { WalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'
import { UseMutationParameters } from '../../types/queries'

type CreateAccountMonarchyMutation = Parameters<
  WalletClient['createAccountMonarchy']
>[0]

export type UseCreateAccountMonarchyParameters = {
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<WalletClient['createAccountMonarchy']>>,
    unknown,
    CreateAccountMonarchyMutation
  >
}

export function useCreateAccountMonarchy({
  chainName,
  mutation,
}: UseCreateAccountMonarchyParameters) {
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName: chainName })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createAccountMonarchy(parameters)
  }, mutation)
}
