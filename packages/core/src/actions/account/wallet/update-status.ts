import { ManagerClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpdateStatusParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof ManagerClient.prototype.updateStatus>[0]
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
  const managerClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateStatus({ ...rest }, fee, memo, funds)
}
