import { getAccountFactoryAddressFromApi } from '../../actions/get-account-factory-address-from-api'
import { getAccountsByOwnerFromApi } from '../../actions/get-accounts-by-owner-from-api'
import { getAnsHostAddressFromApi } from '../../actions/get-ans-host-address-from-api'
import { getAnsTokenFromApi } from '../../actions/get-ans-token-from-api'
import { getAnsTokensFromApi } from '../../actions/get-ans-tokens-from-api'
import { getVersionControlAddressFromApi } from '../../actions/get-version-control-address-from-api'
import { SliceFirst } from '../../types/utils'

export type ApiActions = {
  getAccountFactoryAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryAddressFromApi>>
  ): ReturnType<typeof getAccountFactoryAddressFromApi>
  getAnsHostAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAnsHostAddressFromApi>>
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsByOwnerFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountsByOwnerFromApi>>
  ): ReturnType<typeof getAccountsByOwnerFromApi>
  getAnsTokenFromApi(
    ...args: SliceFirst<Parameters<typeof getAnsTokenFromApi>>
  ): ReturnType<typeof getAnsTokenFromApi>
  getAnsTokensFromApi(
    ...args: SliceFirst<Parameters<typeof getAnsTokensFromApi>>
  ): ReturnType<typeof getAnsTokensFromApi>
  getVersionControlAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getVersionControlAddressFromApi>>
  ): ReturnType<typeof getVersionControlAddressFromApi>
}

export function apiActions(apiUrl: string): ApiActions {
  return {
    getAccountFactoryAddressFromApi: (...args) =>
      getAccountFactoryAddressFromApi(apiUrl, ...args),
    getAnsHostAddressFromApi: (...args) =>
      getAnsHostAddressFromApi(apiUrl, ...args),
    getAccountsByOwnerFromApi: (...args) =>
      getAccountsByOwnerFromApi(apiUrl, ...args),
    getAnsTokenFromApi: (...args) => getAnsTokenFromApi(apiUrl, ...args),
    getAnsTokensFromApi: (...args) => getAnsTokensFromApi(apiUrl, ...args),
    getVersionControlAddressFromApi: (...args) =>
      getVersionControlAddressFromApi(apiUrl, ...args),
  }
}
