import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UpgradeModulesMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['upgradeModules']>[0]
>

export type UseUpgradeModulesParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['upgradeModules']>>,
    unknown,
    UpgradeModulesMutation
  >
}

export function useUpgradeModules({
  accountId,
  chainName,
  mutation,
}: UseUpgradeModulesParameters) {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['upgradeModules', chainName, accountClient],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.upgradeModules({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}

/**
 * @deprecated use useUpgradeModules
 */
const useUpgradeModule = useUpgradeModules
export { useUpgradeModule }
