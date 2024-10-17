import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { type AccountTypes } from '@abstract-money/core/src/codegen/abstract'
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

/**
 * Execute {@link AccountTypes.ExecuteMsg} on a remote account.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useExecuteOnRemote({
  accountId,
  chainName,
  mutation,
}: UseExecuteOnRemoteParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    accountId,
    chainName: chainName,
  })

  return useMutation(
    ['executeOnRemote', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.executeOnRemote({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
