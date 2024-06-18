import { ManagerClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseWalletParameters } from './types'

export type UpdateStatusParameters = WithCosmWasmSignOptions<
  BaseWalletParameters &
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
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateStatus({ ...rest }, fee, memo, funds)
}
