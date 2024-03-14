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
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['createSubAccount']>>,
    unknown,
    CreateSubAccountMutation
  >
}

export function useCreateSubAccount({
  accountId,
  mutation,
}: UseCreateSubAccountParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createSubAccount({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
