import { AccountClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UninstallModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof AccountClient.prototype.uninstallModule>[0]
>

export async function uninstallModule({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: UninstallModulesParameters) {
  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.uninstallModule(rest, fee, memo, funds)
}
