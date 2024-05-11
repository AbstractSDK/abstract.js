import { ManagerClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseWalletParameters } from './types'

export type CreateSubAccountParameters = WithCosmWasmSignOptions<
  BaseWalletParameters &
    Parameters<typeof ManagerClient.prototype.updateSettings>[0]
>

export async function updateSettings({
  accountId,
  ibcEnabled,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: CreateSubAccountParameters) {
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateSettings({ ...rest, ibcEnabled }, fee, memo, funds)
}
