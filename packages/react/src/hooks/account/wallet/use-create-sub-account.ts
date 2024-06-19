import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type CreateSubAccountMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['createSubAccount']>[0]
>

export type UseCreateSubAccountParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['createSubAccount']>>,
    unknown,
    CreateSubAccountMutation
  >
}

export function useCreateSubAccount({
  accountId,
  chainName,
  mutation,
}: UseCreateSubAccountParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['createSubAccount', chainName, accountClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.createSubAccount({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
