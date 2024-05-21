import { getAccountFactoryClientFromApi } from '../../actions/wallet/get-account-factory-client-from-api'
import { getAccountFactoryClientFromVersionControl } from '../../actions/wallet/get-account-factory-client-from-version-control'
import { getAnsHostClientFromApi } from '../../actions/wallet/get-ans-host-client-from-api'
import { getAnsHostClientFromVersionControl } from '../../actions/wallet/get-ans-host-client-from-version-control'
import { getVersionControlClientFromApi } from '../../actions/wallet/get-version-control-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createAccount } from '../../actions/wallet/create-account'
import { createAccountMonarchy } from '../../actions/wallet/create-account-monarchy'
import { getAccountFactoryClient } from '../../actions/wallet/get-account-factory-client'
import { getAnsHostClient } from '../../actions/wallet/get-ans-host-client'
import { getManagerClient } from '../../actions/wallet/get-manager-client'
import { getProxyClient } from '../../actions/wallet/get-proxy-client'
import { getSenderAddress } from '../../actions/wallet/get-sender-address'
import { getSigningCosmWasmClient } from '../../actions/wallet/get-signing-cosm-wasm-client'
import { getVersionControlClient } from '../../actions/wallet/get-version-control-client'
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
  getAccountFactoryClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryClient
    >,
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryClientFromVersionControl>
  getAccountFactoryClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAccountFactoryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryClientFromApi>
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
  getAnsHostClientFromVersionControl(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getAnsHostClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostClientFromVersionControl>
  getVersionControlClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlClient
    >,
  ): ReturnType<typeof getVersionControlClient>
  getVersionControlClientFromApi(
    parameters?: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getVersionControlClientFromApi
    >,
  ): ReturnType<typeof getVersionControlClientFromApi>
  getManagerClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getManagerClient
    >,
  ): ReturnType<typeof getManagerClient>
  getProxyClient(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getProxyClient
    >,
  ): ReturnType<typeof getProxyClient>
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

    getAccountFactoryClient: ({ extra, ...parameters }) =>
      getAccountFactoryClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryClientFromVersionControl: ({ extra, ...parameters }) =>
      getAccountFactoryClientFromVersionControl({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),
    getAccountFactoryClientFromApi: ({ extra, ...parameters } = {}) =>
      getAccountFactoryClientFromApi({
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
    getAnsHostClientFromVersionControl: ({ extra, ...parameters }) =>
      getAnsHostClientFromVersionControl({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),

    getVersionControlClientFromApi: ({ extra, ...parameters } = {}) =>
      getVersionControlClientFromApi({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getVersionControlClient: ({ extra, ...parameters }) =>
      getVersionControlClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),

    getManagerClient: ({ extra, ...parameters }) =>
      getManagerClient({
        signingCosmWasmClient,
        sender,
        ...parameters,
        ...extra,
      }),
    getProxyClient: ({ extra, ...parameters }) =>
      getProxyClient({
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
