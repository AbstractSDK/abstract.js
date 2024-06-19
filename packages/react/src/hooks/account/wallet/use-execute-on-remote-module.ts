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
  const accountClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(
    ['executeOnRemoteModule', chainName, accountClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.executeOnRemoteModule({
        ...cosmWasmSignOptions,
        ...args,
      })
    },
    mutation,
  )
}
