import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getRemoteSimulationResultFromApi } from '../../actions/get-remote-simulation-result-from-api'
import { getAbstractModuleAddressFromVersionControl } from '../../actions/public/get-abstract-module-address-from-version-control'
import { getAbstractModuleVersion } from '../../actions/public/get-abstract-module-version'
import { getAccountFactoryAddressFromVersionControl } from '../../actions/public/get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClient } from '../../actions/public/get-account-factory-query-client'
import { getAccountFactoryQueryClientFromApi } from '../../actions/public/get-account-factory-query-client-from-api'
import { getAccountFactoryQueryClientFromVersionControl } from '../../actions/public/get-account-factory-query-client-from-version-control'
import { getAccountFactoryVersion } from '../../actions/public/get-account-factory-version'
import { getAccountsBaseAddressesFromApi } from '../../actions/public/get-accounts-base-addresses-from-api'
import { getAnsHostAddressFromVersionControl } from '../../actions/public/get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from '../../actions/public/get-ans-host-query-client'
import { getAnsHostQueryClientFromApi } from '../../actions/public/get-ans-host-query-client-from-api'
import { getAnsHostQueryClientFromVersionControl } from '../../actions/public/get-ans-host-query-client-from-version-control'
import { getAnsHostVersion } from '../../actions/public/get-ans-host-version'
import { getCosmWasmClient } from '../../actions/public/get-cosm-wasm-client'
import { getIbcClientQueryClient } from '../../actions/public/get-ibc-client-query-client'
import { getManagerQueryClient } from '../../actions/public/get-manager-query-client'
import { getProxyQueryClient } from '../../actions/public/get-proxy-query-client'
import { getRemoteHostsFromApi } from '../../actions/public/get-remote-hosts-from-api'
import { getVersionControlModuleData } from '../../actions/public/get-version-control-module-data'
import { getVersionControlQueryClient } from '../../actions/public/get-version-control-query-client'
import { getVersionControlQueryClientFromApi } from '../../actions/public/get-version-control-query-client-from-api'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<fn, 'cosmWasmClient' | 'apiUrl'>

export type PublicActions = {
  getAccountsBaseAddresses(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountsBaseAddressesFromApi
    >,
  ): ReturnType<typeof getAccountsBaseAddressesFromApi>
  getAbstractModuleVersion(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAbstractModuleVersion
    >,
  ): ReturnType<typeof getAbstractModuleVersion>
  getAbstractModuleAddressFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAbstractModuleAddressFromVersionControl
    >,
  ): ReturnType<typeof getAbstractModuleAddressFromVersionControl>
  getAccountFactoryAddressFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryAddressFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryAddressFromVersionControl>
  getAccountFactoryVersion(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryVersion
    >,
  ): ReturnType<typeof getAccountFactoryVersion>
  getAccountFactoryQueryClientFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromVersionControl>
  getAccountFactoryQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromApi>
  getAccountFactoryQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClient
    >,
  ): ReturnType<typeof getAccountFactoryQueryClient>
  getAnsHostVersion(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostVersion
    >,
  ): ReturnType<typeof getAnsHostVersion>
  getAnsHostAddressFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostAddressFromVersionControl>
  getAnsHostQueryClientFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromVersionControl>
  getAnsHostQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromApi
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getAnsHostQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClient
    >,
  ): ReturnType<typeof getAnsHostQueryClient>
  getIbcClientQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getIbcClientQueryClient
    >,
  ): ReturnType<typeof getIbcClientQueryClient>
  getManagerQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getManagerQueryClient
    >,
  ): ReturnType<typeof getManagerQueryClient>
  getProxyQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getProxyQueryClient
    >,
  ): ReturnType<typeof getProxyQueryClient>
  getVersionControlModuleData(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlModuleData
    >,
  ): ReturnType<typeof getVersionControlModuleData>
  getVersionControlQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlQueryClientFromApi
    >,
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
  getVersionControlQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlQueryClient
    >,
  ): ReturnType<typeof getVersionControlQueryClient>
  getRemoteHosts(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteHostsFromApi
    >,
  ): ReturnType<typeof getRemoteHostsFromApi>
  getCosmWasmClient(): ReturnType<typeof getCosmWasmClient>
  getRemoteSimulationResult(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteSimulationResultFromApi
    >,
  ): ReturnType<typeof getRemoteSimulationResultFromApi>
}

export function publicActions(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): PublicActions {
  return {
    getAccountsBaseAddresses: ({ extra, ...parameters }) =>
      getAccountsBaseAddressesFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAbstractModuleAddressFromVersionControl: ({ extra, ...parameters }) =>
      getAbstractModuleAddressFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAbstractModuleVersion: ({ extra, ...parameters }) =>
      getAbstractModuleVersion({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryVersion: ({ extra, ...parameters } = {}) =>
      getAccountFactoryVersion({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryAddressFromVersionControl: ({ extra, ...parameters }) =>
      getAccountFactoryAddressFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryQueryClientFromVersionControl: ({
      extra,
      ...parameters
    }) =>
      getAccountFactoryQueryClientFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getAccountFactoryQueryClientFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryQueryClient: ({ extra, ...parameters }) =>
      getAccountFactoryQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),

    getAnsHostVersion: ({ extra, ...parameters } = {}) =>
      getAnsHostVersion({
        apiUrl,
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),

    getAnsHostAddressFromVersionControl: ({ extra, ...parameters }) =>
      getAnsHostAddressFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),

    getAnsHostQueryClientFromVersionControl: ({ extra, ...parameters }) =>
      getAnsHostQueryClientFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAnsHostQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getAnsHostQueryClientFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsHostQueryClient: ({ extra, ...parameters }) =>
      getAnsHostQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getIbcClientQueryClient: ({ extra, ...parameters }) =>
      getIbcClientQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getVersionControlModuleData: ({ extra, ...parameters }) =>
      getVersionControlModuleData({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getVersionControlQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getVersionControlQueryClientFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getVersionControlQueryClient: ({ extra, ...parameters }) =>
      getVersionControlQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getManagerQueryClient: ({ extra, ...parameters }) =>
      getManagerQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getProxyQueryClient: ({ extra, ...parameters }) =>
      getProxyQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getRemoteHosts: ({ extra, ...parameters } = {}) =>
      getRemoteHostsFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getCosmWasmClient: () =>
      getCosmWasmClient({
        cosmWasmClient,
      }),
    getRemoteSimulationResult: ({ extra, ...parameters }) =>
      getRemoteSimulationResultFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
