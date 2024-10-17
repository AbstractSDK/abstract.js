import { getAnsHostClientFromApi } from '../../actions/wallet/get-ans-host-client-from-api'
import { getAnsHostClientFromRegistry } from '../../actions/wallet/get-ans-host-client-from-registry'
import { getRegistryClientFromApi } from '../../actions/wallet/get-registry-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createAccount } from '../../actions/wallet/create-account'
import { createAccountMonarchy } from '../../actions/wallet/create-account-monarchy'
import { getAccountClient } from '../../actions/wallet/get-account-client'
import { getAnsHostClient } from '../../actions/wallet/get-ans-host-client'
import { getRegistryClient } from '../../actions/wallet/get-registry-client'
import { getSenderAddress } from '../../actions/wallet/get-sender-address'
import { getSigningCosmWasmClient } from '../../actions/wallet/get-signing-cosm-wasm-client'
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<
  fn,
  'signingCosmWasmClient' | 'sender' | 'apiUrl'
>

export type WalletActions = {
  createAccount(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createAccount
    >,
  ): ReturnType<typeof createAccount>
  createAccountMonarchy(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createAccountMonarchy
    >,
  ): ReturnType<typeof createAccountMonarchy>
  getAnsHostClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostClient
    >,
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostClientFromApi
    >,
  ): ReturnType<typeof getAnsHostClientFromApi>
  getAnsHostClientFromRegistry(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostClientFromRegistry
    >,
  ): ReturnType<typeof getAnsHostClientFromRegistry>
  getRegistryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRegistryClient
    >,
  ): ReturnType<typeof getRegistryClient>
  getRegistryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getRegistryClientFromApi
    >,
  ): ReturnType<typeof getRegistryClientFromApi>
  getAccountClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountClient
    >,
  ): ReturnType<typeof getAccountClient>
  getSigningCosmWasmClient(): ReturnType<typeof getSigningCosmWasmClient>
  getSenderAddress(): ReturnType<typeof getSenderAddress>
}

export function walletActions(
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): WalletActions {
  return {
    createAccount: ({ extra, ...parameters }) =>
      createAccount({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    createAccountMonarchy: ({ extra, ...parameters }) =>
      createAccountMonarchy({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),

    getAnsHostClient: ({ extra, ...parameters }) =>
      getAnsHostClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),
    getAnsHostClientFromApi: ({ extra, ...parameters } = {}) =>
      getAnsHostClientFromApi({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getAnsHostClientFromRegistry: ({ extra, ...parameters }) =>
      getAnsHostClientFromRegistry({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),

    getRegistryClientFromApi: ({ extra, ...parameters } = {}) =>
      getRegistryClientFromApi({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getRegistryClient: ({ extra, ...parameters }) =>
      getRegistryClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),

    getAccountClient: ({ extra, ...parameters }) =>
      getAccountClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),
    getSigningCosmWasmClient: () =>
      getSigningCosmWasmClient({
        signingCosmWasmClient,
      }),
    getSenderAddress: () =>
      getSenderAddress({
        sender,
      }),
  }
}
