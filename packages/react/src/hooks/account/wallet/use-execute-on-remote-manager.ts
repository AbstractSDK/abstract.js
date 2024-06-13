import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type ExecuteOnRemoteManagerutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['executeOnRemoteManager']>[0]
>

export type UseExecuteOnRemoteManagerParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['executeOnRemoteManager']>>,
    unknown,
    ExecuteOnRemoteManagerutation
  >
}

export function useExecuteOnRemoteManager({
  accountId,
  chainName,
  mutation,
}: UseExecuteOnRemoteManagerParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.executeOnRemoteManager({
      ...cosmWasmSignOptions,
      ...args,
    })
  }, mutation)
}
