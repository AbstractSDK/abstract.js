import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getCosmWasmClient } from 'src/actions/account/public/get-cosm-wasm-client'
import { getAccountBaseAddressesFromApi } from '../../actions/account/public/get-account-base-addresses-from-api'
import { getBaseToken } from '../../actions/account/public/get-base-token'
import { getManagerQueryClientFromApi } from '../../actions/account/public/get-manager-query-client-from-api'
import { getModuleAddress } from '../../actions/account/public/get-module-address'
import { getModules } from '../../actions/account/public/get-modules'
import { getNamespace } from '../../actions/account/public/get-namespace'
import { getOwner } from '../../actions/account/public/get-owner'
import { getProxyQueryClientFromApi } from '../../actions/account/public/get-proxy-query-client-from-api'
import { getRemoteAccountIds } from '../../actions/account/public/get-remote-account-ids'
import { getRemoteAccountProxies } from '../../actions/account/public/get-remote-account-proxies'
import { getSubAccountIds } from '../../actions/account/public/get-sub-account-ids'
import { getSubAccountSequences } from '../../actions/account/public/get-sub-account-sequences'
import { getTotalValue } from '../../actions/account/public/get-total-value'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { CutArgs } from '../../types/with-args'

type CutCosmWasmClientFromParameter<T extends (payload: any) => any> = CutArgs<
  {
    readonly cosmWasmClient: CosmWasmClient
  },
  T
>

type CutSpecificArgsFromParameter<T extends (payload: any) => any> = CutArgs<
  {
    readonly accountId: VersionControlTypes.AccountId
    readonly cosmWasmClient: CosmWasmClient
    readonly apiUrl: string
  },
  T
>

export type AccountPublicActions = {
  getAccountBaseAddresses(
    args: CutSpecificArgsFromParameter<typeof getAccountBaseAddressesFromApi>,
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
  getBaseToken(
    args: CutSpecificArgsFromParameter<typeof getBaseToken>,
  ): ReturnType<typeof getBaseToken>
  getManagerQueryClientFromApi(
    args: CutSpecificArgsFromParameter<typeof getManagerQueryClientFromApi>,
  ): ReturnType<typeof getManagerQueryClientFromApi>
  getModuleAddress(
    args: CutSpecificArgsFromParameter<typeof getModuleAddress>,
  ): ReturnType<typeof getModuleAddress>
  getModules(
    args: CutSpecificArgsFromParameter<typeof getModules>,
  ): ReturnType<typeof getModules>
  getNamespace(
    args: CutSpecificArgsFromParameter<typeof getNamespace>,
  ): ReturnType<typeof getNamespace>
  getOwner(
    args: CutSpecificArgsFromParameter<typeof getOwner>,
  ): ReturnType<typeof getOwner>
  getProxyQueryClientFromApi(
    args: CutSpecificArgsFromParameter<typeof getProxyQueryClientFromApi>,
  ): ReturnType<typeof getProxyQueryClientFromApi>
  getSubAccountIds(
    args: CutSpecificArgsFromParameter<typeof getSubAccountIds>,
  ): ReturnType<typeof getSubAccountIds>
  getSubAccountSequences(
    args: CutSpecificArgsFromParameter<typeof getSubAccountSequences>,
  ): ReturnType<typeof getSubAccountSequences>
  getRemoteAccountProxies(
    args: CutSpecificArgsFromParameter<typeof getRemoteAccountProxies>,
  ): ReturnType<typeof getRemoteAccountProxies>
  getRemoteAccountIds(
    args: CutSpecificArgsFromParameter<typeof getRemoteAccountIds>,
  ): ReturnType<typeof getRemoteAccountIds>
  getTotalValue(
    args: CutSpecificArgsFromParameter<typeof getTotalValue>,
  ): ReturnType<typeof getTotalValue>
  getCosmWasmClient(
    args: CutCosmWasmClientFromParameter<typeof getCosmWasmClient>,
  ): ReturnType<typeof getCosmWasmClient>
}

export function accountPublicActions(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): AccountPublicActions {
  return {
    getAccountBaseAddresses: ({ args, ...rest }) =>
      getAccountBaseAddressesFromApi({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getBaseToken: ({ args, ...rest }) =>
      getBaseToken({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getManagerQueryClientFromApi: ({ args, ...rest }) =>
      getManagerQueryClientFromApi({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getModuleAddress: ({ args, ...rest }) =>
      getModuleAddress({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getModules: ({ args, ...rest }) =>
      getModules({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getNamespace: ({ args, ...rest }) =>
      getNamespace({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getOwner: ({ args, ...rest }) =>
      getOwner({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getProxyQueryClientFromApi: ({ args, ...rest }) =>
      getProxyQueryClientFromApi({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getSubAccountIds: ({ args, ...rest }) =>
      getSubAccountIds({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getSubAccountSequences: ({ args, ...rest }) =>
      getSubAccountSequences({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getRemoteAccountProxies: ({ args, ...rest }) =>
      getRemoteAccountProxies({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getRemoteAccountIds: ({ args, ...rest }) =>
      getRemoteAccountIds({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getTotalValue: ({ args, ...rest }) =>
      getTotalValue({
        args: { ...args, accountId, cosmWasmClient, apiUrl },
        ...rest,
      }),

    getCosmWasmClient: ({ args, ...rest }) =>
      getCosmWasmClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
  }
}
