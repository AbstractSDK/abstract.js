import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromVersionControl } from '../../actions/public/get-abstract-module-address-from-version-control'
import { getAbstractModuleVersion } from '../../actions/public/get-abstract-module-version'
import { getAccountFactoryAddressFromVersionControl } from '../../actions/public/get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClient } from '../../actions/public/get-account-factory-query-client'
import { getAccountFactoryQueryClientFromApi } from '../../actions/public/get-account-factory-query-client-from-api'
import { getAccountFactoryQueryClientFromVersionControl } from '../../actions/public/get-account-factory-query-client-from-version-control'
import { getAccountFactoryVersion } from '../../actions/public/get-account-factory-version'
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
import { ExtractAndOmitParameters } from '../../types/parameters'

type ExtractAndOmitDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndOmitParameters<fn, 'cosmWasmClient' | 'apiUrl'>

export type PublicActions = {
  getAbstractModuleVersion(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAbstractModuleVersion
    >,
  ): ReturnType<typeof getAbstractModuleVersion>
  getAbstractModuleAddressFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAbstractModuleAddressFromVersionControl
    >,
  ): ReturnType<typeof getAbstractModuleAddressFromVersionControl>
  getAccountFactoryAddressFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryAddressFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryAddressFromVersionControl>
  getAccountFactoryVersion(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryVersion
    >,
  ): ReturnType<typeof getAccountFactoryVersion>
  getAccountFactoryQueryClientFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromVersionControl>
  getAccountFactoryQueryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromApi>
  getAccountFactoryQueryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryQueryClient
    >,
  ): ReturnType<typeof getAccountFactoryQueryClient>
  getAnsHostVersion(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostVersion
    >,
  ): ReturnType<typeof getAnsHostVersion>
  getAnsHostAddressFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostAddressFromVersionControl>
  getAnsHostQueryClientFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromVersionControl>
  getAnsHostQueryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromApi
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getAnsHostQueryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostQueryClient
    >,
  ): ReturnType<typeof getAnsHostQueryClient>
  getIbcClientQueryClient(
    args: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getIbcClientQueryClient
    >,
  ): ReturnType<typeof getIbcClientQueryClient>
  getManagerQueryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getManagerQueryClient
    >,
  ): ReturnType<typeof getManagerQueryClient>
  getProxyQueryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getProxyQueryClient
    >,
  ): ReturnType<typeof getProxyQueryClient>
  getVersionControlModuleData(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlModuleData
    >,
  ): ReturnType<typeof getVersionControlModuleData>
  getVersionControlQueryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlQueryClientFromApi
    >,
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
  getVersionControlQueryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlQueryClient
    >,
  ): ReturnType<typeof getVersionControlQueryClient>
  getRemoteHosts(
    args: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getRemoteHostsFromApi
    >,
  ): ReturnType<typeof getRemoteHostsFromApi>
  getCosmWasmClient(): ReturnType<typeof getCosmWasmClient>
}

export function publicActions(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): PublicActions {
  return {
    getAbstractModuleAddressFromVersionControl: (parameters) =>
      getAbstractModuleAddressFromVersionControl({
        ...parameters,
        cosmWasmClient,
      }),
    getAbstractModuleVersion: (parameters) =>
      getAbstractModuleVersion({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getAccountFactoryVersion: (parameters) =>
      getAccountFactoryVersion({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getAccountFactoryAddressFromVersionControl: (parameters) =>
      getAccountFactoryAddressFromVersionControl({
        ...parameters,
        cosmWasmClient,
      }),
    getAccountFactoryQueryClientFromVersionControl: (parameters) =>
      getAccountFactoryQueryClientFromVersionControl({
        ...parameters,
        cosmWasmClient,
      }),
    getAccountFactoryQueryClientFromApi: (parameters) =>
      getAccountFactoryQueryClientFromApi({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getAccountFactoryQueryClient: (parameters) =>
      getAccountFactoryQueryClient({
        ...parameters,
        cosmWasmClient,
      }),

    getAnsHostVersion: (parameters) =>
      getAnsHostVersion({
        ...parameters,
        apiUrl,
        cosmWasmClient,
      }),

    getAnsHostAddressFromVersionControl: (parameters) =>
      getAnsHostAddressFromVersionControl({
        ...parameters,
        cosmWasmClient,
      }),

    getAnsHostQueryClientFromVersionControl: (parameters) =>
      getAnsHostQueryClientFromVersionControl({
        ...parameters,
        cosmWasmClient,
      }),
    getAnsHostQueryClientFromApi: (parameters) =>
      getAnsHostQueryClientFromApi({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getAnsHostQueryClient: (parameters) =>
      getAnsHostQueryClient({
        ...parameters,
        cosmWasmClient,
      }),
    getIbcClientQueryClient: (parameters) =>
      getIbcClientQueryClient({
        ...parameters,
        cosmWasmClient,
      }),
    getVersionControlModuleData: (parameters) =>
      getVersionControlModuleData({
        ...parameters,
        cosmWasmClient,
      }),
    getVersionControlQueryClientFromApi: (parameters) =>
      getVersionControlQueryClientFromApi({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getVersionControlQueryClient: (parameters) =>
      getVersionControlQueryClient({
        ...parameters,
        cosmWasmClient,
      }),
    getManagerQueryClient: (parameters) =>
      getManagerQueryClient({
        ...parameters,
        cosmWasmClient,
      }),
    getProxyQueryClient: (parameters) =>
      getProxyQueryClient({
        ...parameters,
        cosmWasmClient,
      }),
    getRemoteHosts: (parameters) =>
      getRemoteHostsFromApi({
        ...parameters,
        cosmWasmClient,
        apiUrl,
      }),
    getCosmWasmClient: () =>
      getCosmWasmClient({
        cosmWasmClient,
      }),
  }
}
