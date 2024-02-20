import { WalletClient } from '@abstract-money/core'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'

type CreateAccountMutation = Parameters<WalletClient['createAccount']>[0]

export function useCreateAccount(
  { args: { chainName } }: { args: { chainName: string } },
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<WalletClient['createAccount']>>,
      unknown,
      CreateAccountMutation
    >,
    'mutationFn'
  >,
) {
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName: chainName })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createAccount(parameters)
  }, options)
}
