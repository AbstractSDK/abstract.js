import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type ExecuteOnRemoteAccountMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['executeOnRemote']>[0]
>

export type UseExecuteOnRemoteParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['executeOnRemote']>>,
    unknown,
    ExecuteOnRemoteAccountMutation
  >
}

export function useExecuteOnRemote({
  accountId,
  chainName,
  mutation,
}: UseExecuteOnRemoteParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.executeOnRemote({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
