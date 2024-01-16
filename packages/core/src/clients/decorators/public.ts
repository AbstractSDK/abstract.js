import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountFactoryAddress } from '../../actions/public/account-factory/get-account-factory-address.js'
import { getAccountFactoryQueryClient } from '../../actions/public/account-factory/get-account-factory-query-client'
import { getAccountFactoryQueryClientFromApi } from '../../actions/public/account-factory/get-account-factory-query-client-from-api'
import { getAnsHostAddress } from '../../actions/public/ans/get-ans-host-address.js'
import { getAnsHostQueryClientFromApi } from '../../actions/public/ans/get-ans-host-query-client-from-api.js'
import { getAnsHostQueryClient } from '../../actions/public/ans/get-ans-host-query-client.js'
import { getVersionControlModuleData } from '../../actions/public/version-control/get-version-control-module-data.js'
import { getVersionControlQueryClientFromApi } from '../../actions/public/version-control/get-version-control-query-client-from-api.js'
import { SliceFirst, SliceFirstTwo } from '../../types/utils.js'
import { Client } from '../create-client.js'

export type PublicActions = {
  getAccountFactoryAddress(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryAddress>>
  ): ReturnType<typeof getAccountFactoryAddress>
  getAccountFactoryQueryClient(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryQueryClient>>
  ): ReturnType<typeof getAccountFactoryQueryClient>
  getAccountFactoryQueryClientFromApi(
    ...args: SliceFirstTwo<
      Parameters<typeof getAccountFactoryQueryClientFromApi>
    >
  ): ReturnType<typeof getAccountFactoryQueryClientFromApi>
  getAnsHostAddress(
    ...args: SliceFirst<Parameters<typeof getAnsHostAddress>>
  ): ReturnType<typeof getAnsHostAddress>
  getAnsHostQueryClient(
    ...args: SliceFirst<Parameters<typeof getAnsHostQueryClient>>
  ): ReturnType<typeof getAnsHostQueryClient>
  getAnsHostQueryClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAnsHostQueryClientFromApi>>
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getVersionControlModuleData(
    ...args: SliceFirst<Parameters<typeof getVersionControlModuleData>>
  ): ReturnType<typeof getVersionControlModuleData>
  getVersionControlQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getVersionControlQueryClientFromApi>>
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
}

export function publicActions(
  { apiUrl }: Client,
  client: CosmWasmClient,
): PublicActions {
  return {
    getAccountFactoryAddress: (...args) =>
      getAccountFactoryAddress(client, ...args),
    getAccountFactoryQueryClient: (...args) =>
      getAccountFactoryQueryClient(client, ...args),
    getAccountFactoryQueryClientFromApi: (...args) =>
      getAccountFactoryQueryClientFromApi(client, apiUrl, ...args),
    getAnsHostAddress: (...args) => getAnsHostAddress(client, ...args),
    getAnsHostQueryClient: (...args) => getAnsHostQueryClient(client, ...args),
    getAnsHostQueryClientFromApi: (...args) =>
      getAnsHostQueryClientFromApi(client, apiUrl, ...args),
    getVersionControlModuleData: (...args) =>
      getVersionControlModuleData(client, ...args),
    getVersionControlQueryClientFromApi: (...args) =>
      getVersionControlQueryClientFromApi(client, ...args),
  }
}
