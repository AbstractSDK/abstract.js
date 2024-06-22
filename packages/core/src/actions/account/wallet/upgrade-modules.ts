import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerClient, VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type UpgradeModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Omit<Parameters<typeof ManagerClient.prototype.upgrade>[0], 'accountId'> & {
      subAccountId?: number
    }
>

export async function upgradeModules({
  accountId,
  subAccountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: UpgradeModulesParameters) {
  const managerClient = await getManagerClientFromApi({
    accountId: subAccountId ? { ...accountId, seq: subAccountId } : accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.upgrade(rest, fee, memo, funds)
}
