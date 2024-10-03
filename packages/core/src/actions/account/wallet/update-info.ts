import { AccountClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpdateInfoParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof AccountClient.prototype.updateInfo>[0]
>

export async function updateInfo({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: UpdateInfoParameters) {
  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.updateInfo({ ...rest }, fee, memo, funds)
}
