import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAbstractModuleAddressFromVersionControl } from '../../actions/public/get-abstract-module-address-from-version-control'
import { getAccountQueryClient } from '../../actions/public/get-account-query-client'
import { getAnsHostAddressFromVersionControl } from '../../actions/public/get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from '../../actions/public/get-ans-host-query-client'
import { getAnsHostQueryClientFromVersionControl } from '../../actions/public/get-ans-host-query-client-from-version-control'
import { getCosmWasmClient } from '../../actions/public/get-cosm-wasm-client'
import { getIbcClientQueryClient } from '../../actions/public/get-ibc-client-query-client'
import { getVersionControlModuleData } from '../../actions/public/get-version-control-module-data'
import { getVersionControlQueryClient } from '../../actions/public/get-version-control-query-client'
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
  getVersionControlQueryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlQueryClient
    >,
  ): ReturnType<typeof getVersionControlQueryClient>
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
  getAbstractModuleAddressFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAbstractModuleAddressFromVersionControl
    >,
  ): ReturnType<typeof getAbstractModuleAddressFromVersionControl>
  getAnsHostAddressFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostAddressFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostAddressFromVersionControl>
  getAnsHostQueryClientFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostQueryClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostQueryClientFromVersionControl>
  getVersionControlModuleData(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlModuleData
    >,
  ): ReturnType<typeof getVersionControlModuleData>
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
    getVersionControlQueryClient: ({ extra, ...parameters }) =>
      getVersionControlQueryClient({
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
    getAbstractModuleAddressFromVersionControl: ({ extra, ...parameters }) =>
      getAbstractModuleAddressFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAnsHostAddressFromVersionControl: ({ extra, ...parameters }) =>
      getAnsHostAddressFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getAnsHostQueryClientFromVersionControl: ({ extra, ...parameters }) =>
      getAnsHostQueryClientFromVersionControl({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
    getVersionControlModuleData: ({ extra, ...parameters }) =>
      getVersionControlModuleData({
        cosmWasmClient,
        ...parameters,
        ...extra,
      }),
  }
}
