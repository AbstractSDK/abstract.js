import { ContractMsg } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { queryModule } from 'src/actions/account/public/query-module'
import { getAccountAddressFromApi } from '../../actions/account/public/get-account-address-from-api'
import { getAccountId } from '../../actions/account/public/get-account-id'
import { getAccountInstantiate2AddressFromApi } from '../../actions/account/public/get-account-instantiate2-address-from-api'
import { getAccountQueryClientFromApi } from '../../actions/account/public/get-account-query-client-from-api'
import { getAccountSettings } from '../../actions/account/public/get-account-settings'
import { getModuleAddress } from '../../actions/account/public/get-module-address'
import { getModuleInstantiate2AddressFromApi } from '../../actions/account/public/get-module-instantiate2-address-from-api'
import { getModules } from '../../actions/account/public/get-modules'
import { getNamespace } from '../../actions/account/public/get-namespace'
import { getOwner } from '../../actions/account/public/get-owner'
import { getRegistryAccountId } from '../../actions/account/public/get-registry-account-id'
import { getRemoteAccountIds } from '../../actions/account/public/get-remote-account-ids'
import { getRemoteAccounts } from '../../actions/account/public/get-remote-accounts'
import { getSubAccountIds } from '../../actions/account/public/get-sub-account-ids'
import { getSubAccountSequences } from '../../actions/account/public/get-sub-account-sequences'
import { simulateExecuteRemote } from '../../actions/account/public/simulate-execute-remote'
import { simulateExecuteRemoteAccount } from '../../actions/account/public/simulate-execute-remote-account'
import { RegistryTypes } from '../../codegen/abstract/index'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (parameters: any) => any,
> = ExtractAndPartializeParameters<
  fn,
  'cosmWasmClient' | 'accountId' | 'apiUrl'
>

/**
 * The public query client actions for an Abstract account.
 */
export type AccountPublicActions = {
  getRegistryAccountId(): ReturnType<typeof getRegistryAccountId>
  getAccountId(): ReturnType<typeof getAccountId>
  getAccountAddress(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountAddressFromApi
    >,
  ): ReturnType<typeof getAccountAddressFromApi>
  getAccountSettings(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountSettings
    >,
  ): ReturnType<typeof getAccountSettings>
  getAccountQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountQueryClientFromApi
    >,
  ): ReturnType<typeof getAccountQueryClientFromApi>
  getModuleAddress(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getModuleAddress
    >,
  ): ReturnType<typeof getModuleAddress>
  getModules(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getModules
    >,
  ): ReturnType<typeof getModules>
  getModuleInstantiate2Address(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getModuleInstantiate2AddressFromApi
    >,
  ): ReturnType<typeof getModuleInstantiate2AddressFromApi>
  getAccountInstantiate2Address(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountInstantiate2AddressFromApi
    >,
  ): ReturnType<typeof getAccountInstantiate2AddressFromApi>
  getNamespace(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getNamespace
    >,
  ): ReturnType<typeof getNamespace>
  getOwner(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getOwner
    >,
  ): ReturnType<typeof getOwner>
  getSubAccountIds(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getSubAccountIds
    >,
  ): ReturnType<typeof getSubAccountIds>
  getSubAccountSequences(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getSubAccountSequences
    >,
  ): ReturnType<typeof getSubAccountSequences>
  getRemoteAccountProxies(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteAccounts
    >,
  ): ReturnType<typeof getRemoteAccounts>
  getRemoteAccountIds(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteAccountIds
    >,
  ): ReturnType<typeof getRemoteAccountIds>
  simulateExecuteRemoteAccount(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof simulateExecuteRemoteAccount
    >,
  ): ReturnType<typeof simulateExecuteRemoteAccount>
  simulateExecuteRemote(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof simulateExecuteRemote
    >,
  ): ReturnType<typeof simulateExecuteRemote>
  queryModule<TModuleMsg extends ContractMsg>(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof queryModule<TModuleMsg>
    >,
  ): ReturnType<typeof queryModule<TModuleMsg>>
}

export function accountPublicActions(
  accountId: RegistryTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): AccountPublicActions {
  return {
    getRegistryAccountId: () => getRegistryAccountId({ accountId }),
    getAccountId: () => getAccountId({ accountId, cosmWasmClient }),
    getAccountAddress: ({ extra, ...parameters } = {}) =>
      getAccountAddressFromApi({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountSettings: ({ extra, ...parameters } = {}) =>
      getAccountSettings({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getAccountQueryClientFromApi({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getModuleAddress: ({ extra, ...parameters }) =>
      getModuleAddress({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getModules: ({ extra, ...parameters } = {}) =>
      getModules({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getModuleInstantiate2Address: ({ extra, ...parameters }) =>
      getModuleInstantiate2AddressFromApi({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountInstantiate2Address: ({ extra, ...parameters } = {}) =>
      getAccountInstantiate2AddressFromApi({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getNamespace: ({ extra, ...parameters } = {}) =>
      getNamespace({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getOwner: ({ extra, ...parameters } = {}) =>
      getOwner({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getSubAccountIds: ({ extra, ...parameters } = {}) =>
      getSubAccountIds({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getSubAccountSequences: ({ extra, ...parameters } = {}) =>
      getSubAccountSequences({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getRemoteAccountProxies: ({ extra, ...parameters } = {}) =>
      getRemoteAccounts({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getRemoteAccountIds: ({ extra, ...parameters } = {}) =>
      getRemoteAccountIds({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    simulateExecuteRemoteAccount: ({ extra, ...parameters }) =>
      simulateExecuteRemoteAccount({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    simulateExecuteRemote: ({ extra, ...parameters }) =>
      simulateExecuteRemote({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    queryModule: ({ extra, ...parameters }) =>
      queryModule({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
