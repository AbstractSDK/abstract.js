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
import { getAnsHostVersionFromApi } from '../../actions/public/get-ans-host-version-from-api'
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

/**
 * "Public" query actions available for the Abstract infrastructure.
 * Also see {@link AbstractBaseActions} for more public query actions.
 */
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
  getAnsHostVersion(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostVersionFromApi
    >,
  ): ReturnType<typeof getAnsHostVersionFromApi>
  getAnsHostQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromApi
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getVersionControlQueryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlQueryClientFromApi
    >,
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
  getRemoteHosts(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRemoteHostsFromApi
    >,
  ): ReturnType<typeof getRemoteHostsFromApi>
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
    getAbstractModuleVersion: ({ extra, ...parameters }) =>
      getAbstractModuleVersion({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsHostVersion: ({ extra, ...parameters } = {}) =>
      getAnsHostVersionFromApi({
        apiUrl,
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
    getVersionControlQueryClientFromApi: ({ extra, ...parameters } = {}) =>
      getVersionControlQueryClientFromApi({
        cosmWasmClient,
        apiUrl,
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
