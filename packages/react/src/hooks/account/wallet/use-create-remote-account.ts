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
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['createRemoteAccount', chainName, accountClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.createRemoteAccount({
        ...cosmWasmSignOptions,
        ...args,
      })
    },
    mutation,
  )
}
