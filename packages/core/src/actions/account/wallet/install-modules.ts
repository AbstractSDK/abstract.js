import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { OverrideProperties } from 'type-fest'
import { AccountClient, RegistryTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import {
  MergedModuleInstallConfig,
  moduleInstallConfig,
} from '../../../utils/modules/module-install-config'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type InstallModulesParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters &
    OverrideProperties<
      Parameters<typeof AccountClient.prototype.installModules>[0],
      { modules: MergedModuleInstallConfig[] }
    >
>

export async function installModules({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
  modules,
  ...rest
}: InstallModulesParameters): Promise<ExecuteResult> {
  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.installModules(
    { modules: modules.map((m) => moduleInstallConfig(m)), ...rest },
    fee,
    memo,
    funds,
  )
}
