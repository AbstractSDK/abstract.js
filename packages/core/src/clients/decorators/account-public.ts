import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getManagerQueryClientFromApi } from 'src/actions/account/public/manager/get-manager-query-client-from-api'
import { getProxyQueryClientFromApi } from 'src/actions/account/public/proxy/get-proxy-query-client-from-api'
import { getAccountBaseAddressesFromApi } from 'src/actions/account/public/version-control/get-account-base-addresses-from-api'
import { VersionControlTypes } from 'src/codegen/abstract/index'
import { SliceFirst, SliceFirstThree } from '../../types/utils'
import { Client } from '../create-client'

export type AccountPublicActions = {
  getAccountBaseAddresses(
    ...args: SliceFirstThree<Parameters<typeof getAccountBaseAddressesFromApi>>
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
  getManagerQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getManagerQueryClientFromApi>>
  ): ReturnType<typeof getManagerQueryClientFromApi>
  getProxyQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getProxyQueryClientFromApi>>
  ): ReturnType<typeof getProxyQueryClientFromApi>
}

export function accountPublicActions(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  { apiUrl }: Client,
): AccountPublicActions {
  return {
    getAccountBaseAddresses: () =>
      getAccountBaseAddressesFromApi(accountId, cosmWasmClient, apiUrl),
    getManagerQueryClientFromApi: () =>
      getManagerQueryClientFromApi(accountId, cosmWasmClient, apiUrl),
    getProxyQueryClientFromApi: () =>
      getProxyQueryClientFromApi(accountId, cosmWasmClient, apiUrl),
  }
}
