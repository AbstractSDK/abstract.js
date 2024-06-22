import { ManagerClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type CreateSubAccountParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Omit<
      Parameters<typeof ManagerClient.prototype.createSubAccount>[0],
      'accountId'
    > & { subAccountId?: number }
>

export async function createSubAccount({
  accountId,
  subAccountId,
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
  return managerClient.createSubAccount(
    { ...rest, accountId: subAccountId },
    fee,
    memo,
    funds,
  )
}
