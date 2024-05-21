import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountBaseAddressesFromApi } from '../../actions/account/public/get-account-base-addresses-from-api'
import { getAccountSettings } from '../../actions/account/public/get-account-settings'
import { getBaseToken } from '../../actions/account/public/get-base-token'
import { getManagerQueryClientFromApi } from '../../actions/account/public/get-manager-query-client-from-api'
import { getModuleAddress } from '../../actions/account/public/get-module-address'
import { getModuleInstantiate2AddressFromApi } from '../../actions/account/public/get-module-instantiate2-address-from-api'
import { getModules } from '../../actions/account/public/get-modules'
import { getNamespace } from '../../actions/account/public/get-namespace'
import { getOwner } from '../../actions/account/public/get-owner'
import { getProxyQueryClientFromApi } from '../../actions/account/public/get-proxy-query-client-from-api'
import { getRemoteAccountIds } from '../../actions/account/public/get-remote-account-ids'
import { getRemoteAccountProxies } from '../../actions/account/public/get-remote-account-proxies'
import { getSubAccountIds } from '../../actions/account/public/get-sub-account-ids'
import { getSubAccountSequences } from '../../actions/account/public/get-sub-account-sequences'
import { getTotalValue } from '../../actions/account/public/get-total-value'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (parameters: any) => any,
> = ExtractAndPartializeParameters<
  fn,
  'cosmWasmClient' | 'accountId' | 'apiUrl'
>
export type AccountPublicActions = {
  getAccountBaseAddresses(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountBaseAddressesFromApi
    >,
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
  getAccountSettings(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountSettings
    >,
  ): ReturnType<typeof getAccountSettings>
  getBaseToken(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getBaseToken
    >,
  ): ReturnType<typeof getBaseToken>
  getManagerQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getManagerQueryClientFromApi
    >,
  ): ReturnType<typeof getManagerQueryClientFromApi>
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
  getModuleInstantiate2AddressFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getModuleInstantiate2AddressFromApi
    >,
  ): ReturnType<typeof getModuleInstantiate2AddressFromApi>
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
  getProxyQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getProxyQueryClientFromApi
    >,
  ): ReturnType<typeof getProxyQueryClientFromApi>
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
      typeof getRemoteAccountProxies
    >,
  ): ReturnType<typeof getRemoteAccountProxies>
  getRemoteAccountIds(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteAccountIds
    >,
  ): ReturnType<typeof getRemoteAccountIds>
  getTotalValue(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getTotalValue
    >,
  ): ReturnType<typeof getTotalValue>
}

export function accountPublicActions(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): AccountPublicActions {
  return {
    getAccountBaseAddresses: ({ extra, ...parameters } = {}) =>
      getAccountBaseAddressesFromApi({
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
    getBaseToken: ({ extra, ...parameters } = {}) =>
      getBaseToken({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getManagerQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getManagerQueryClientFromApi({
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
    getModuleInstantiate2AddressFromApi: ({ extra, ...parameters }) =>
      getModuleInstantiate2AddressFromApi({
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
    getProxyQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getProxyQueryClientFromApi({
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
      getRemoteAccountProxies({
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
    getTotalValue: ({ extra, ...parameters } = {}) =>
      getTotalValue({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
