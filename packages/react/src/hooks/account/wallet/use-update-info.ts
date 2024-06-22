import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UpdateInfoMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['updateInfo']>[0]
>

export type UseUpdateInfoParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['updateInfo']>>,
    unknown,
    UpdateInfoMutation
  >
}

export function useUpdateInfo({
  accountId,
  chainName,
  mutation,
}: UseUpdateInfoParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['updateInfo', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.updateInfo({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
