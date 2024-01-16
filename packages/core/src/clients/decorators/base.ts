import { getAccountFactoryAddressFromApi } from 'src/actions/account-factory/get-account-factory-address-from-api.js'
import { getAnsHostAddressFromApi } from 'src/actions/ans/get-ans-host-address-from-api.js'
import { getAccountsOfOwnerFromApi } from 'src/actions/get-accounts-of-owner-from-api.js'
import { SliceFirst } from '../../types/utils.js'
import { Client_Base } from '../create-client.js'

export type BaseActions = {
  getAccountFactoryAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryAddressFromApi>>
  ): ReturnType<typeof getAccountFactoryAddressFromApi>
  getAnsHostAddressFromApi(
    ...args: SliceFirst<Parameters<typeof getAnsHostAddressFromApi>>
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsOfOwnerFromApi(
    ...args: SliceFirst<Parameters<typeof getAccountsOfOwnerFromApi>>
  ): ReturnType<typeof getAccountsOfOwnerFromApi>
}

export function baseActions({ apiUrl }: Client_Base): BaseActions {
  return {
    getAccountFactoryAddressFromApi: (...args) =>
      getAccountFactoryAddressFromApi(apiUrl, ...args),
    getAnsHostAddressFromApi: (...args) =>
      getAnsHostAddressFromApi(apiUrl, ...args),
    getAccountsOfOwnerFromApi: (...args) =>
      getAccountsOfOwnerFromApi(apiUrl, ...args),
  }
}
