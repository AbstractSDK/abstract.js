import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountBaseAddressesFromApi } from '../../actions/account/public/get-account-base-addresses-from-api'
import { getBaseAsset } from '../../actions/account/public/get-base-asset'
import { getManagerQueryClientFromApi } from '../../actions/account/public/get-manager-query-client-from-api'
import { getModuleAddress } from '../../actions/account/public/get-module-address'
import { getModules } from '../../actions/account/public/get-modules'
import { getNamespace } from '../../actions/account/public/get-namespace'
import { getOwner } from '../../actions/account/public/get-owner'
import { getProxyQueryClientFromApi } from '../../actions/account/public/get-proxy-query-client-from-api'
import { getSubAccountIds } from '../../actions/account/public/get-sub-account-ids'
import { getSubAccountSequences } from '../../actions/account/public/get-sub-account-sequences'
import { getTotalValue } from '../../actions/account/public/get-total-value'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { SliceFirst, SliceFirstThree } from '../../types/utils'

export type AccountPublicActions = {
  getAccountBaseAddresses(
    ...args: SliceFirstThree<Parameters<typeof getAccountBaseAddressesFromApi>>
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
  getBaseAsset(
    ...args: SliceFirstThree<Parameters<typeof getBaseAsset>>
  ): ReturnType<typeof getBaseAsset>
  getManagerQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getManagerQueryClientFromApi>>
  ): ReturnType<typeof getManagerQueryClientFromApi>
  getModuleAddress(
    ...args: SliceFirstThree<Parameters<typeof getModuleAddress>>
  ): ReturnType<typeof getModuleAddress>
  getModules(
    ...args: SliceFirstThree<Parameters<typeof getModules>>
  ): ReturnType<typeof getModules>
  getNamespace(
    ...args: SliceFirstThree<Parameters<typeof getNamespace>>
  ): ReturnType<typeof getNamespace>
  getOwner(
    ...args: SliceFirstThree<Parameters<typeof getOwner>>
  ): ReturnType<typeof getOwner>
  getProxyQueryClientFromApi(
    ...args: SliceFirst<Parameters<typeof getProxyQueryClientFromApi>>
  ): ReturnType<typeof getProxyQueryClientFromApi>
  getSubAccountIds(
    ...args: SliceFirstThree<Parameters<typeof getSubAccountIds>>
  ): ReturnType<typeof getSubAccountIds>
  getSubAccountSequences(
    ...args: SliceFirstThree<Parameters<typeof getSubAccountSequences>>
  ): ReturnType<typeof getSubAccountSequences>
  getTotalValue(
    ...args: SliceFirstThree<Parameters<typeof getTotalValue>>
  ): ReturnType<typeof getTotalValue>
}

export function accountPublicActions(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): AccountPublicActions {
  return {
    getAccountBaseAddresses: (...args) =>
      getAccountBaseAddressesFromApi(
        accountId,
        cosmWasmClient,
        apiUrl,
        ...args,
      ),
    getBaseAsset: (...args) =>
      getBaseAsset(accountId, cosmWasmClient, apiUrl, ...args),
    getManagerQueryClientFromApi: () =>
      getManagerQueryClientFromApi(accountId, cosmWasmClient, apiUrl),
    getModuleAddress: (...args) =>
      getModuleAddress(accountId, cosmWasmClient, apiUrl, ...args),
    getModules: (...args) =>
      getModules(accountId, cosmWasmClient, apiUrl, ...args),
    getNamespace: (...args) =>
      getNamespace(accountId, cosmWasmClient, apiUrl, ...args),
    getOwner: (...args) => getOwner(accountId, cosmWasmClient, apiUrl, ...args),
    getProxyQueryClientFromApi: () =>
      getProxyQueryClientFromApi(accountId, cosmWasmClient, apiUrl),
    getSubAccountIds: (...args) =>
      getSubAccountIds(accountId, cosmWasmClient, apiUrl, ...args),
    getSubAccountSequences: (...args) =>
      getSubAccountSequences(accountId, cosmWasmClient, apiUrl, ...args),
    getTotalValue: (...args) =>
      getTotalValue(accountId, cosmWasmClient, apiUrl, ...args),
  }
}
