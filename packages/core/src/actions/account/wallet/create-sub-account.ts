import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerClient, VersionControlTypes } from '../../../codegen/abstract'
import { getManagerClientFromApi } from './get-manager-client-from-api'

export async function createSubAccount(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  ...rest: Parameters<typeof ManagerClient.prototype.createSubAccount>
) {
  const managerClient = await getManagerClientFromApi(
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  )
  managerClient.createSubAccount(...rest)
}
