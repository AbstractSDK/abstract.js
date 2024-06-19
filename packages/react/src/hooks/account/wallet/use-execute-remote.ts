import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type ExecuteRemoteAccountMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['executeRemote']>[0]
>

export type UseExecuteRemoteParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['executeRemote']>>,
    unknown,
    ExecuteRemoteAccountMutation
  >
}

export function useExecuteRemote({
  accountId,
  chainName,
  mutation,
}: UseExecuteRemoteParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(
    ['executeRemote', chainName, accountClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.executeRemote({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
