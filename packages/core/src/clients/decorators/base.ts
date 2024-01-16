import { getAccountFactoryAddressFromApi } from 'src/actions/account-factory/get-account-factory-address-from-api'
import { getAnsHostAddressFromApi } from 'src/actions/ans/get-ans-host-address-from-api'
import { getAccountsByOwnerFromApi } from 'src/actions/get-accounts-of-owner-from-api'
import { SliceFirst } from '../../types/utils'
import { Client_Base } from '../create-client'

export type BaseActions = {
  getAccountFactoryAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryAddressFromApi>>
  ): ReturnType<typeof getAccountFactoryAddressFromApi>
  getAnsHostAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAnsHostAddressFromApi>>
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsOfOwnerFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountsByOwnerFromApi>>
  ): ReturnType<typeof getAccountsByOwnerFromApi>
}

export function baseActions({ apiUrl }: Client_Base): BaseActions {
  return {
    getAccountFactoryAddressFromApi: (...args) =>
      getAccountFactoryAddressFromApi(apiUrl, ...args),
    getAnsHostAddressFromApi: (...args) =>
      getAnsHostAddressFromApi(apiUrl, ...args),
    getAccountsOfOwnerFromApi: (...args) =>
      getAccountsByOwnerFromApi(apiUrl, ...args),
  }
}
