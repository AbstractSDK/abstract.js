import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountBaseAddressesFromApi } from '../../actions/account/public/get-account-base-addresses-from-api'
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
import { ExtractAndOmitParameters } from '../../types/parameters'

type ExtractAndOmitDecoratedParametersFromParameters<
  fn extends (parameters: any) => any,
> = ExtractAndOmitParameters<fn, 'cosmWasmClient' | 'accountId' | 'apiUrl'>

export type AccountPublicActions = {
  getAccountBaseAddresses(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountBaseAddressesFromApi
    >,
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
  getBaseToken(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getBaseToken
    >,
  ): ReturnType<typeof getBaseToken>
  getManagerQueryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getManagerQueryClientFromApi
    >,
  ): ReturnType<typeof getManagerQueryClientFromApi>
  getModuleAddress(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getModuleAddress
    >,
  ): ReturnType<typeof getModuleAddress>
  getModules(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getModules
    >,
  ): ReturnType<typeof getModules>
  getModuleInstantiate2AddressFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getModuleInstantiate2AddressFromApi
    >,
  ): ReturnType<typeof getModuleInstantiate2AddressFromApi>
  getNamespace(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getNamespace
    >,
  ): ReturnType<typeof getNamespace>
  getOwner(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getOwner
    >,
  ): ReturnType<typeof getOwner>
  getProxyQueryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getProxyQueryClientFromApi
    >,
  ): ReturnType<typeof getProxyQueryClientFromApi>
  getSubAccountIds(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getSubAccountIds
    >,
  ): ReturnType<typeof getSubAccountIds>
  getSubAccountSequences(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getSubAccountSequences
    >,
  ): ReturnType<typeof getSubAccountSequences>
  getRemoteAccountProxies(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getRemoteAccountProxies
    >,
  ): ReturnType<typeof getRemoteAccountProxies>
  getRemoteAccountIds(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getRemoteAccountIds
    >,
  ): ReturnType<typeof getRemoteAccountIds>
  getTotalValue(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
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
    getAccountBaseAddresses: (parameters) =>
      getAccountBaseAddressesFromApi({
        accountId,
        cosmWasmClient,
        apiUrl,
        ...parameters,
      }),
    getBaseToken: (parameters) =>
      getBaseToken({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getManagerQueryClientFromApi: (parameters) =>
      getManagerQueryClientFromApi({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getModuleAddress: (parameters) =>
      getModuleAddress({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getModules: (parameters) =>
      getModules({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getModuleInstantiate2AddressFromApi: (parameters) =>
      getModuleInstantiate2AddressFromApi({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getNamespace: (parameters) =>
      getNamespace({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getOwner: (parameters) =>
      getOwner({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getProxyQueryClientFromApi: (parameters) =>
      getProxyQueryClientFromApi({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getSubAccountIds: (parameters) =>
      getSubAccountIds({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getSubAccountSequences: (parameters) =>
      getSubAccountSequences({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getRemoteAccountProxies: (parameters) =>
      getRemoteAccountProxies({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getRemoteAccountIds: (parameters) =>
      getRemoteAccountIds({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
    getTotalValue: (parameters) =>
      getTotalValue({
        ...parameters,
        accountId,
        cosmWasmClient,
        apiUrl,
      }),
  }
}
