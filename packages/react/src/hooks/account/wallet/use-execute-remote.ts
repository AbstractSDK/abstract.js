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
  const walletClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.executeRemote({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
