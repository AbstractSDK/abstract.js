import { ManagerClient } from '../../../codegen/abstract'
import { Action } from '../../../codegen/abstract/cosmwasm-codegen/Manager.types'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type ProposeOwnerParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof ManagerClient.prototype.proposeOwner>[0]
>

export async function proposeOwner({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: ProposeOwnerParameters) {
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.proposeOwner({ ...rest }, fee, memo, funds)
}
