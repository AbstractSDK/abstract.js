import { getSubAccountIdsByModuleIdFromApi } from 'src/actions'
import { getAccountBalancesFromApi } from '../../actions/get-account-balance-from-api'
import { getAccountFactoryAddressFromApi } from '../../actions/get-account-factory-address-from-api'
import { getAccountsByOwnerFromApi } from '../../actions/get-accounts-by-owner-from-api'
import { getAnsHostAddressFromApi } from '../../actions/get-ans-host-address-from-api'
import { getAnsTokenFromApi } from '../../actions/get-ans-token-from-api'
import { getAnsTokensFromApi } from '../../actions/get-ans-tokens-from-api'
import { getVersionControlAddressFromApi } from '../../actions/get-version-control-address-from-api'
import { ExtractAndOmitParameters } from '../../types/parameters'

type ExtractAndOmitDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndOmitParameters<fn, 'apiUrl'>

export type ApiActions = {
  getAccountFactoryAddressFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryAddressFromApi
    >,
  ): ReturnType<typeof getAccountFactoryAddressFromApi>
  getAnsHostAddressFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromApi
    >,
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsByOwnerFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountsByOwnerFromApi
    >,
  ): ReturnType<typeof getAccountsByOwnerFromApi>
  getAnsTokenFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsTokenFromApi
    >,
  ): ReturnType<typeof getAnsTokenFromApi>
  getAnsTokensFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsTokensFromApi
    >,
  ): ReturnType<typeof getAnsTokensFromApi>
  getVersionControlAddressFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlAddressFromApi
    >,
  ): ReturnType<typeof getVersionControlAddressFromApi>
  getAccountBalancesFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountBalancesFromApi
    >,
  ): ReturnType<typeof getAccountBalancesFromApi>
  getSubAccountIdsByModuleIdFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getSubAccountIdsByModuleIdFromApi
    >,
  ): ReturnType<typeof getSubAccountIdsByModuleIdFromApi>
}

export function apiActions(apiUrl: string): ApiActions {
  return {
    getAccountBalancesFromApi: (parameters) =>
      getAccountBalancesFromApi({
        ...parameters,
        apiUrl,
      }),
    getAccountFactoryAddressFromApi: (parameters) =>
      getAccountFactoryAddressFromApi({
        ...parameters,
        apiUrl,
      }),
    getAnsHostAddressFromApi: (parameters) =>
      getAnsHostAddressFromApi({
        ...parameters,
        apiUrl,
      }),
    getAccountsByOwnerFromApi: (parameters) =>
      getAccountsByOwnerFromApi({
        ...parameters,
        apiUrl,
      }),
    getAnsTokenFromApi: (parameters) =>
      getAnsTokenFromApi({
        ...parameters,
        apiUrl,
      }),
    getAnsTokensFromApi: (parameters) =>
      getAnsTokensFromApi({
        ...parameters,
        apiUrl,
      }),
    getVersionControlAddressFromApi: (parameters) =>
      getVersionControlAddressFromApi({
        ...parameters,
        apiUrl,
      }),
    getSubAccountIdsByModuleIdFromApi: (parameters) =>
      getSubAccountIdsByModuleIdFromApi({
        ...parameters,
        apiUrl,
      }),
  }
}
