import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import { UseMutationParameters } from '../../../types/queries'

type UpgradeModuleMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['upgradeModules']>[0]
>

export type UseUpgradeModuleParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<AccountWalletClient['upgradeModules']>>,
    unknown,
    UpgradeModuleMutation
  >
}

export function useUpgradeModules({
  accountId,
  chainName,
  mutation,
}: UseUpgradeModuleParameters) {
  const config = useConfig()
  const walletClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })

  return useMutation(({ args, ...cosmWasmSignOptions }) => {
    if (!walletClient) throw new Error('walletClient is not defined')
    return walletClient.upgradeModules({ ...cosmWasmSignOptions, ...args })
  }, mutation)
}

/**
 * @deprecated use useUpgradeModules
 */
const useUpgradeModule = useUpgradeModules
export { useUpgradeModule }
