import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromRegistry } from '../../actions/public/get-abstract-module-address-from-registry'
import { getAccountQueryClient } from '../../actions/public/get-account-query-client'
import { getAnsHostAddressFromRegistry } from '../../actions/public/get-ans-host-address-from-registry'
import { getAnsHostQueryClient } from '../../actions/public/get-ans-host-query-client'
import { getAnsHostQueryClientFromRegistry } from '../../actions/public/get-ans-host-query-client-from-registry'
import { getCosmWasmClient } from '../../actions/public/get-cosm-wasm-client'
import { getIbcClientQueryClient } from '../../actions/public/get-ibc-client-query-client'
import { getRegistryModuleData } from '../../actions/public/get-registry-module-data'
import { getRegistryQueryClient } from '../../actions/public/get-registry-query-client'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<fn, 'cosmWasmClient'>

/**
 * Actions that query the chain for Abstract things directly using the {@link CosmWasmClient}.
 */
export type AbstractBaseActions = {
  getCosmWasmClient(): ReturnType<typeof getCosmWasmClient>
  getAccountQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountQueryClient
    >,
  ): ReturnType<typeof getAccountQueryClient>
  getRegistryQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRegistryQueryClient
    >,
  ): ReturnType<typeof getRegistryQueryClient>
  getAnsHostQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClient
    >,
  ): ReturnType<typeof getAnsHostQueryClient>
  getIbcClientQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getIbcClientQueryClient
    >,
  ): ReturnType<typeof getIbcClientQueryClient>
  getAbstractModuleAddressFromRegistry(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAbstractModuleAddressFromRegistry
    >,
  ): ReturnType<typeof getAbstractModuleAddressFromRegistry>
  getAnsHostAddressFromRegistry(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromRegistry
    >,
  ): ReturnType<typeof getAnsHostAddressFromRegistry>
  getAnsHostQueryClientFromRegistry(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromRegistry
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromRegistry>
  getRegistryModuleData(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRegistryModuleData
    >,
  ): ReturnType<typeof getRegistryModuleData>
}

export function abstractBaseActions(
  cosmWasmClient: CosmWasmClient,
): AbstractBaseActions {
  return {
    getCosmWasmClient: () =>
      getCosmWasmClient({
        cosmWasmClient,
      }),
    getAccountQueryClient: ({ extra, ...parameters }) =>
      getAccountQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getRegistryQueryClient: ({ extra, ...parameters }) =>
      getRegistryQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),

    getAnsHostQueryClient: ({ extra, ...parameters }) =>
      getAnsHostQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getIbcClientQueryClient: ({ extra, ...parameters }) =>
      getIbcClientQueryClient({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAbstractModuleAddressFromRegistry: ({ extra, ...parameters }) =>
      getAbstractModuleAddressFromRegistry({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAnsHostAddressFromRegistry: ({ extra, ...parameters }) =>
      getAnsHostAddressFromRegistry({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAnsHostQueryClientFromRegistry: ({ extra, ...parameters }) =>
      getAnsHostQueryClientFromRegistry({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getRegistryModuleData: ({ extra, ...parameters }) =>
      getRegistryModuleData({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
  }
}
