import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerClient, VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type InstallModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof ManagerClient.prototype.installModules>[0]
>

export async function installModules({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  ...rest
}: InstallModulesParameters) {
  const managerClient = await getManagerClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return managerClient.installModules(rest, fee, memo, funds)
}
