import { ManagerClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseWalletParameters } from './types'

export type UpdateInfoParameters = WithCosmWasmSignOptions<
  BaseWalletParameters &
    Parameters<typeof ManagerClient.prototype.updateInfo>[0]
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
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateInfo({ ...rest }, fee, memo, funds)
}
