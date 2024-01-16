import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountFactoryQueryClient } from 'src/actions/public/account-factory/get-account-factory-query-client'
import { getAnsHostQueryClient } from 'src/actions/public/ans/get-ans-host-query-client'
import { getVersionControlQueryClient } from 'src/actions/public/version-control/get-version-control-query-client'
import { getAccountFactoryAddressFromVersionControl } from '../../actions/public/account-factory/get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClientFromApi } from '../../actions/public/account-factory/get-account-factory-query-client-from-api'
import { getAccountFactoryQueryClientFromVersionControl } from '../../actions/public/account-factory/get-account-factory-query-client-from-version-control'
import { getAnsHostAddressFromVersionControl } from '../../actions/public/ans/get-ans-host-address-from-version-control'
import { getAnsHostQueryClientFromApi } from '../../actions/public/ans/get-ans-host-query-client-from-api'
import { getAnsHostQueryClientFromVersionControl } from '../../actions/public/ans/get-ans-host-query-client-from-version-control'
import { getVersionControlModuleData } from '../../actions/public/version-control/get-version-control-module-data'
import { getVersionControlQueryClientFromApi } from '../../actions/public/version-control/get-version-control-query-client-from-api'
import { SliceFirst, SliceFirstTwo } from '../../types/utils'
import { Client } from '../create-client'

export type PublicActions = {
  getAccountFactoryAddressFromVersionControl(
    ...args: SliceFirst<
      Parameters<typeof getAccountFactoryAddressFromVersionControl>
    >
  ): ReturnType<typeof getAccountFactoryAddressFromVersionControl>
  getAccountFactoryQueryClientFromVersionControl(
    ...args: SliceFirst<
      Parameters<typeof getAccountFactoryQueryClientFromVersionControl>
    >
  ): ReturnType<typeof getAccountFactoryQueryClientFromVersionControl>
  getAccountFactoryQueryClientFromApi(
    ...args: SliceFirstTwo<
      Parameters<typeof getAccountFactoryQueryClientFromApi>
    >
  ): ReturnType<typeof getAccountFactoryQueryClientFromApi>
  getAccountFactoryQueryClient(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryQueryClient>>
  ): ReturnType<typeof getAccountFactoryQueryClient>
  getAnsHostAddress(
    ...args: SliceFirst<Parameters<typeof getAnsHostAddressFromVersionControl>>
  ): ReturnType<typeof getAnsHostAddressFromVersionControl>
  getAnsHostQueryClientFromVersionControl(
    ...args: SliceFirst<
      Parameters<typeof getAnsHostQueryClientFromVersionControl>
    >
  ): ReturnType<typeof getAnsHostQueryClientFromVersionControl>
  getAnsHostQueryClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAnsHostQueryClientFromApi>>
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getAnsHostQueryClient(
    ...args: SliceFirst<Parameters<typeof getAnsHostQueryClient>>
  ): ReturnType<typeof getAnsHostQueryClient>
  getVersionControlModuleData(
    ...args: SliceFirst<Parameters<typeof getVersionControlModuleData>>
  ): ReturnType<typeof getVersionControlModuleData>
  getVersionControlQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getVersionControlQueryClientFromApi>>
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
  getVersionControlQueryClient(
    ...args: SliceFirst<Parameters<typeof getVersionControlQueryClient>>
  ): ReturnType<typeof getVersionControlQueryClient>
}

export function publicActions(
  { apiUrl }: Client,
  client: CosmWasmClient,
): PublicActions {
  return {
    getAccountFactoryAddressFromVersionControl: (...args) =>
      getAccountFactoryAddressFromVersionControl(client, ...args),
    getAccountFactoryQueryClientFromVersionControl: (...args) =>
      getAccountFactoryQueryClientFromVersionControl(client, ...args),
    getAccountFactoryQueryClientFromApi: (...args) =>
      getAccountFactoryQueryClientFromApi(client, apiUrl, ...args),
    getAccountFactoryQueryClient: (...args) =>
      getAccountFactoryQueryClient(client, ...args),

    getAnsHostAddress: (...args) =>
      getAnsHostAddressFromVersionControl(client, ...args),
    getAnsHostQueryClientFromVersionControl: (...args) =>
      getAnsHostQueryClientFromVersionControl(client, ...args),
    getAnsHostQueryClientFromApi: (...args) =>
      getAnsHostQueryClientFromApi(client, apiUrl, ...args),
    getAnsHostQueryClient: (...args) => getAnsHostQueryClient(client, ...args),

    getVersionControlModuleData: (...args) =>
      getVersionControlModuleData(client, ...args),
    getVersionControlQueryClientFromApi: (...args) =>
      getVersionControlQueryClientFromApi(client, ...args),
    getVersionControlQueryClient: (...args) =>
      getVersionControlQueryClient(client, ...args),
  }
}
