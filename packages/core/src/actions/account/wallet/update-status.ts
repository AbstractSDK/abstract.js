import { AccountClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpdateStatusParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof AccountClient.prototype.updateStatus>[0]
>

export async function updateStatus({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: UpdateStatusParameters) {
  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.updateStatus({ ...rest }, fee, memo, funds)
}
