import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type ExecuteOnRemoteModuleMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['executeOnRemoteModule']>[0]
>

export type UseExecuteOnRemoteModuleParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['executeOnRemoteModule']>>,
    unknown,
    ExecuteOnRemoteModuleMutation
  >
}

export function useExecuteOnRemoteModule({
  accountId,
  chainName,
  mutation,
}: UseExecuteOnRemoteModuleParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.executeOnRemoteModule({
      ...cosmWasmSignOptions,
      ...args,
    })
  }, mutation)
}
