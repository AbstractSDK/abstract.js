import { WalletClient } from '@abstract-money/core'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'

type CreateAccountMonarchyMutation = Parameters<
  WalletClient['createAccountMonarchy']
>[0]

export function useCreateAccountMonarchy(
  { args: { chainName } }: { args: { chainName: string } },
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<WalletClient['createAccountMonarchy']>>,
      unknown,
      CreateAccountMonarchyMutation
    >,
    'mutationFn'
  >,
) {
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName: chainName })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createAccountMonarchy(parameters)
  }, options)
}
