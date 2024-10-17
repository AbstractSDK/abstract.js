import { AccountClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpgradeModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Omit<Parameters<typeof AccountClient.prototype.upgrade>[0], 'accountId'> & {
      subAccountId?: number
    }
>

export async function upgradeModules({
  accountId,
  subAccountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: UpgradeModulesParameters) {
  const accountClient = await getAccountClientFromApi({
    accountId: subAccountId ? { ...accountId, seq: subAccountId } : accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.upgrade(rest, fee, memo, funds)
}
