import { GovAction } from '../../../codegen/abstract/cosmwasm-codegen/Manager.types'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpdateOwnershipParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters & {
    update: GovAction
  }
>

export async function updateOwnership({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  update,
}: UpdateOwnershipParameters) {
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateOwnership(update, fee, memo, funds)
}
