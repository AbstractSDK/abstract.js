import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountClient, VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type InstallModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    Parameters<typeof AccountClient.prototype.installModules>[0]
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
}: InstallModulesParameters): Promise<ExecuteResult> {
  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.installModules(rest, fee, memo, funds)
}
