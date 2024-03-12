import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'

type CreateSubAccountMutation = Parameters<
  AccountWalletClient['createSubAccount']
>[0]

export function useCreateSubAccount(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<AccountWalletClient['createSubAccount']>>,
      unknown,
      CreateSubAccountMutation
    >,
    'mutationFn'
  >,
) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName: accountId?.chainName,
    accountId,
  })

  return useMutation((parameters) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.createSubAccount(parameters)
  }, options)
}
