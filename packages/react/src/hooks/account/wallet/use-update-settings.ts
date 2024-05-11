import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UpdateSettingsMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['updateSettings']>[0]
>

export type UseUpdateSettingsParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['updateSettings']>>,
    unknown,
    UpdateSettingsMutation
  >
}

export function useUpdateSettings({
  accountId,
  chainName,
  mutation,
}: UseUpdateSettingsParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.updateSettings({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}
