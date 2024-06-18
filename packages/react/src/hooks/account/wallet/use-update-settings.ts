import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'
import { useEnableIbc } from './use-enable-ibc'

type UpdateSettingsMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['enableIbc']>[0] & {
    ibcEnabled?: boolean
  }
>

export type UseUpdateSettingsParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['enableIbc']>>,
    unknown,
    UpdateSettingsMutation
  >
}

/**
 * @deprecated use `useEnableIbc` instead
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useUpdateSettings({
  accountId,
  chainName,
  mutation,
}: UseUpdateSettingsParameters) {
  const { mutateAsync } = useEnableIbc({
    accountId,
    chainName,
    mutation,
  })

  return useMutation(async ({ args, ...cosmWasmSignOptions }) => {
    return await mutateAsync({ ...cosmWasmSignOptions, args })
  }, mutation)
}
