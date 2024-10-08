import { getAccountBalancesFromApi } from '../../actions/get-account-balance-from-api'
import { getAccountsByOwnerFromApi } from '../../actions/get-accounts-by-owner-from-api'
import { getAnsHostAddressFromApi } from '../../actions/get-ans-host-address-from-api'
import { getAnsTokenFromApi } from '../../actions/get-ans-token-from-api'
import { getAnsTokensFromApi } from '../../actions/get-ans-tokens-from-api'
import { getModulesFromApi } from '../../actions/get-modules-from-api'
import { getSubAccountIdsByModuleIdFromApi } from '../../actions/get-sub-account-ids-by-module-id'
import { getVersionControlAddressFromApi } from '../../actions/get-version-control-address-from-api'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<fn, 'apiUrl'>

/**
 * Query actions to be performed on the Abstract API.
 */
export type ApiActions = {
  getAnsHostAddressFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromApi
    >,
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsByOwnerFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountsByOwnerFromApi
    >,
  ): ReturnType<typeof getAccountsByOwnerFromApi>
  getAnsTokenFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsTokenFromApi
    >,
  ): ReturnType<typeof getAnsTokenFromApi>
  getAnsTokensFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsTokensFromApi
    >,
  ): ReturnType<typeof getAnsTokensFromApi>
  getModulesFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getModulesFromApi
    >,
  ): ReturnType<typeof getModulesFromApi>
  getVersionControlAddressFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlAddressFromApi
    >,
  ): ReturnType<typeof getVersionControlAddressFromApi>
  getAccountBalancesFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountBalancesFromApi
    >,
  ): ReturnType<typeof getAccountBalancesFromApi>
  getSubAccountIdsByModuleIdFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getSubAccountIdsByModuleIdFromApi
    >,
  ): ReturnType<typeof getSubAccountIdsByModuleIdFromApi>
}

export function apiActions(apiUrl: string): ApiActions {
  return {
    getAccountBalancesFromApi: ({ extra, ...parameters }) =>
      getAccountBalancesFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsHostAddressFromApi: ({ extra, ...parameters }) =>
      getAnsHostAddressFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAccountsByOwnerFromApi: ({ extra, ...parameters }) =>
      getAccountsByOwnerFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsTokenFromApi: ({ extra, ...parameters }) =>
      getAnsTokenFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsTokensFromApi: ({ extra, ...parameters }) =>
      getAnsTokensFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getModulesFromApi: ({ extra, ...parameters }) =>
      getModulesFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getVersionControlAddressFromApi: ({ extra, ...parameters }) =>
      getVersionControlAddressFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getSubAccountIdsByModuleIdFromApi: ({ extra, ...parameters }) =>
      getSubAccountIdsByModuleIdFromApi({
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
