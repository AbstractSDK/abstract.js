import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type EnableIbcMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['enableIbc']>[0] & {
    ibcEnabled?: boolean
  }
>

export type UseEnableIbcParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['enableIbc']>>,
    unknown,
    EnableIbcMutation
  >
}

/**
 * Enable IBC on the account.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useEnableIbc({
  accountId,
  chainName,
  mutation,
}: UseEnableIbcParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['enableIbc', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      if (!args.ibcEnabled) {
        throw new Error('no action')
      }

      return accountClient.enableIbc({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
