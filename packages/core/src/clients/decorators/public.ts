import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getSimulationResultFromApi } from '../../actions/get-simulation-result-from-api'
import { getAbstractModuleAddressFromVersionControl } from '../../actions/public/get-abstract-module-address-from-version-control'
import { getAbstractModuleVersion } from '../../actions/public/get-abstract-module-version'
import { getAccountAddressesFromApi } from '../../actions/public/get-account-addresses-from-api'
import { getAccountQueryClient } from '../../actions/public/get-account-query-client'
import { getAnsHostAddressFromVersionControl } from '../../actions/public/get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from '../../actions/public/get-ans-host-query-client'
import { getAnsHostQueryClientFromApi } from '../../actions/public/get-ans-host-query-client-from-api'
import { getAnsHostQueryClientFromVersionControl } from '../../actions/public/get-ans-host-query-client-from-version-control'
import { getAnsHostVersion } from '../../actions/public/get-ans-host-version'
import { getCosmWasmClient } from '../../actions/public/get-cosm-wasm-client'
import { getIbcClientQueryClient } from '../../actions/public/get-ibc-client-query-client'
import { getRemoteHostsFromApi } from '../../actions/public/get-remote-hosts-from-api'
import { getVersionControlModuleData } from '../../actions/public/get-version-control-module-data'
import { getVersionControlQueryClient } from '../../actions/public/get-version-control-query-client'
import { getVersionControlQueryClientFromApi } from '../../actions/public/get-version-control-query-client-from-api'
import { simulateRemoteMsg } from '../../actions/simulate-remote-msg'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<fn, 'cosmWasmClient' | 'apiUrl'>

export type PublicActions = {
  getAccountsBaseAddresses(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountAddressesFromApi
    >,
  ): ReturnType<typeof getAccountAddressesFromApi>
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
      typeof getAccountQueryClient
    >,
  ): ReturnType<typeof getAccountQueryClient>
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
  getSimulationResult(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getSimulationResultFromApi
    >,
  ): ReturnType<typeof getSimulationResultFromApi>
  simulateRemoteMsg(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof simulateRemoteMsg
    >,
  ): ReturnType<typeof simulateRemoteMsg>
}

export function publicActions(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): PublicActions {
  return {
    getAccountsBaseAddresses: ({ extra, ...parameters }) =>
      getAccountAddressesFromApi({
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
      getAccountQueryClient({
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
    getSimulationResult: ({ extra, ...parameters }) =>
      getSimulationResultFromApi({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    simulateRemoteMsg: ({ extra, ...parameters }) =>
      simulateRemoteMsg({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
