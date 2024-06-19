import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UpdateStatusMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['updateStatus']>[0]
>

export type UseUpdateStatusParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['updateStatus']>>,
    unknown,
    UpdateStatusMutation
  >
}

export function useUpdateStatus({
  accountId,
  chainName,
  mutation,
}: UseUpdateStatusParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['updateStatus', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.updateStatus({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
