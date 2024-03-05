import { ManagerClient } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseWalletParameters } from './types'

export type CreateSubAccountParameters = WithArgsAndCosmWasmSignOptions<
  BaseWalletParameters &
    Omit<
      Parameters<typeof ManagerClient.prototype.createSubAccount>[0],
      'accountId'
    > & { subAccountId?: number }
>

export async function createSubAccount({
  args: {
    accountId,
    subAccountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    ...rest
  },
  fee,
  memo,
  funds,
}: CreateSubAccountParameters) {
  const managerClient = await getManagerClientFromApi({
    args: {
      accountId,
      signingCosmWasmClient,
      sender,
      apiUrl,
    },
  })
  return managerClient.createSubAccount(
    { ...rest, accountId: subAccountId },
    fee,
    memo,
    funds,
  )
}
