import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerClient, VersionControlTypes } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { getManagerClientFromApi } from './get-manager-client-from-api'

export type CreateSubAccountParameters = WithArgsAndCosmWasmSignOptions<
  {
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
  } & Parameters<typeof ManagerClient.prototype.createSubAccount>[0]
>

export async function createSubAccount({
  args: { accountId, signingCosmWasmClient, apiUrl, sender, ...rest },
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
  return managerClient.createSubAccount(rest, fee, memo, funds)
}