import { WalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'
import { ExtractArgsFromParameters } from '../../types/args'
import { UseMutationParameters } from '../../types/queries'

type CreateAccountMonarchyMutation = ExtractArgsFromParameters<
  Parameters<WalletClient['createAccountMonarchy']>[0]
>

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

  return useMutation(
    ['createAccountMonarchy', chainName, walletClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!walletClient) throw new Error('walletClient is not defined')
      return walletClient.createAccountMonarchy({
        ...args,
        ...cosmWasmSignOptions,
      })
    },
    mutation,
  )
}
