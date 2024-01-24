import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountFactoryAddressFromVersionControl } from '../../actions/public/get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClient } from '../../actions/public/get-account-factory-query-client'
import { getAccountFactoryQueryClientFromApi } from '../../actions/public/get-account-factory-query-client-from-api'
import { getAccountFactoryQueryClientFromVersionControl } from '../../actions/public/get-account-factory-query-client-from-version-control'
import { getAnsHostAddressFromVersionControl } from '../../actions/public/get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from '../../actions/public/get-ans-host-query-client'
import { getAnsHostQueryClientFromApi } from '../../actions/public/get-ans-host-query-client-from-api'
import { getAnsHostQueryClientFromVersionControl } from '../../actions/public/get-ans-host-query-client-from-version-control'
import { getCosmWasmClient } from '../../actions/public/get-cosm-wasm-client'
import { getManagerQueryClient } from '../../actions/public/get-manager-query-client'
import { getProxyQueryClient } from '../../actions/public/get-proxy-query-client'
import { getVersionControlModuleData } from '../../actions/public/get-version-control-module-data'
import { getVersionControlQueryClient } from '../../actions/public/get-version-control-query-client'
import { getVersionControlQueryClientFromApi } from '../../actions/public/get-version-control-query-client-from-api'
import { CutArgs } from '../../types/with-args'

type CutCosmWasmClientFromParameter<T extends (payload: any) => any> = CutArgs<
  {
    readonly cosmWasmClient: CosmWasmClient
  },
  T
>

type CutCosmWasmClientAndApiUrlFromParameter<T extends (payload: any) => any> =
  CutArgs<
    {
      readonly cosmWasmClient: CosmWasmClient
      readonly apiUrl: string
    },
    T
  >

export type PublicActions = {
  getAccountFactoryAddressFromVersionControl(
    args: CutCosmWasmClientFromParameter<
      typeof getAccountFactoryAddressFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryAddressFromVersionControl>
  getAccountFactoryQueryClientFromVersionControl(
    args: CutCosmWasmClientFromParameter<
      typeof getAccountFactoryQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromVersionControl>
  getAccountFactoryQueryClientFromApi(
    args: CutCosmWasmClientAndApiUrlFromParameter<
      typeof getAccountFactoryQueryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryQueryClientFromApi>
  getAccountFactoryQueryClient(
    args: CutCosmWasmClientFromParameter<typeof getAccountFactoryQueryClient>,
  ): ReturnType<typeof getAccountFactoryQueryClient>
  getAnsHostAddressFromVersionControl(
    args: CutCosmWasmClientFromParameter<
      typeof getAnsHostAddressFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostAddressFromVersionControl>
  getAnsHostQueryClientFromVersionControl(
    args: CutCosmWasmClientFromParameter<
      typeof getAnsHostQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromVersionControl>
  getAnsHostQueryClientFromApi(
    args: CutCosmWasmClientAndApiUrlFromParameter<
      typeof getAnsHostQueryClientFromApi
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromApi>
  getAnsHostQueryClient(
    args: CutCosmWasmClientFromParameter<typeof getAnsHostQueryClient>,
  ): ReturnType<typeof getAnsHostQueryClient>
  getManagerQueryClient(
    args: CutCosmWasmClientFromParameter<typeof getManagerQueryClient>,
  ): ReturnType<typeof getManagerQueryClient>
  getProxyQueryClient(
    args: CutCosmWasmClientFromParameter<typeof getProxyQueryClient>,
  ): ReturnType<typeof getProxyQueryClient>
  getVersionControlModuleData(
    args: CutCosmWasmClientFromParameter<typeof getVersionControlModuleData>,
  ): ReturnType<typeof getVersionControlModuleData>
  getVersionControlQueryClientFromApi(
    args: CutCosmWasmClientAndApiUrlFromParameter<
      typeof getVersionControlQueryClientFromApi
    >,
  ): ReturnType<typeof getVersionControlQueryClientFromApi>
  getVersionControlQueryClient(
    args: CutCosmWasmClientFromParameter<typeof getVersionControlQueryClient>,
  ): ReturnType<typeof getVersionControlQueryClient>
  getCosmWasmClient(): ReturnType<typeof getCosmWasmClient>
}

export function publicActions(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): PublicActions {
  return {
    getAccountFactoryAddressFromVersionControl: ({ args, ...rest }) =>
      getAccountFactoryAddressFromVersionControl({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getAccountFactoryQueryClientFromVersionControl: ({ args, ...rest }) =>
      getAccountFactoryQueryClientFromVersionControl({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getAccountFactoryQueryClientFromApi: ({ args, ...rest }) =>
      getAccountFactoryQueryClientFromApi({
        args: { ...args, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getAccountFactoryQueryClient: ({ args, ...rest }) =>
      getAccountFactoryQueryClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getAnsHostAddressFromVersionControl: ({ args, ...rest }) =>
      getAnsHostAddressFromVersionControl({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),

    getAnsHostQueryClientFromVersionControl: ({ args, ...rest }) =>
      getAnsHostQueryClientFromVersionControl({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getAnsHostQueryClientFromApi: ({ args, ...rest }) =>
      getAnsHostQueryClientFromApi({
        args: { ...args, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getAnsHostQueryClient: ({ args, ...rest }) =>
      getAnsHostQueryClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getVersionControlModuleData: ({ args, ...rest }) =>
      getVersionControlModuleData({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getVersionControlQueryClientFromApi: ({ args, ...rest }) =>
      getVersionControlQueryClientFromApi({
        args: { ...args, cosmWasmClient, apiUrl },
        ...rest,
      }),
    getVersionControlQueryClient: ({ args, ...rest }) =>
      getVersionControlQueryClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getManagerQueryClient: ({ args, ...rest }) =>
      getManagerQueryClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getProxyQueryClient: ({ args, ...rest }) =>
      getProxyQueryClient({
        args: { ...args, cosmWasmClient },
        ...rest,
      }),
    getCosmWasmClient: () =>
      getCosmWasmClient({
        args: { cosmWasmClient },
      }),
  }
}
