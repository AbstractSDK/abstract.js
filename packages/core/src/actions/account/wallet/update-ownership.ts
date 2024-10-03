import { GovAction } from '../../../codegen/abstract/cosmwasm-codegen/Manager.types'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
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
  const managerClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.updateOwnership(update, fee, memo, funds)
}
