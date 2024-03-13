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
import { ExtractAndOmitParameters } from '../../types/parameters'

type ExtractAndOmitDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndOmitParameters<fn, 'signingCosmWasmClient' | 'sender' | 'apiUrl'>

export type WalletActions = {
  createAccount(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof createAccount
    >,
  ): ReturnType<typeof createAccount>
  createAccountMonarchy(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof createAccountMonarchy
    >,
  ): ReturnType<typeof createAccountMonarchy>
  getAccountFactoryClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryClient
    >,
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryClientFromVersionControl>
  getAccountFactoryClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAccountFactoryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryClientFromApi>
  getAnsHostClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostClient
    >,
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostClientFromApi
    >,
  ): ReturnType<typeof getAnsHostClientFromApi>
  getAnsHostClientFromVersionControl(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getAnsHostClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostClientFromVersionControl>
  getVersionControlClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlClient
    >,
  ): ReturnType<typeof getVersionControlClient>
  getVersionControlClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getVersionControlClientFromApi
    >,
  ): ReturnType<typeof getVersionControlClientFromApi>
  getManagerClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getManagerClient
    >,
  ): ReturnType<typeof getManagerClient>
  getProxyClient(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
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
    createAccount: (parameters) =>
      createAccount({
        ...parameters,
        signingCosmWasmClient,
        sender,
        apiUrl,
      }),
    createAccountMonarchy: (parameters) =>
      createAccountMonarchy({
        ...parameters,
        signingCosmWasmClient,
        sender,
        apiUrl,
      }),

    getAccountFactoryClient: (parameters) =>
      getAccountFactoryClient({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),
    getAccountFactoryClientFromVersionControl: (parameters) =>
      getAccountFactoryClientFromVersionControl({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),
    getAccountFactoryClientFromApi: (parameters) =>
      getAccountFactoryClientFromApi({
        ...parameters,
        signingCosmWasmClient,
        sender,
        apiUrl,
      }),

    getAnsHostClient: (parameters) =>
      getAnsHostClient({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),
    getAnsHostClientFromApi: (parameters) =>
      getAnsHostClientFromApi({
        ...parameters,
        signingCosmWasmClient,
        sender,
        apiUrl,
      }),
    getAnsHostClientFromVersionControl: (parameters) =>
      getAnsHostClientFromVersionControl({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),

    getVersionControlClientFromApi: (parameters) =>
      getVersionControlClientFromApi({
        ...parameters,
        signingCosmWasmClient,
        sender,
        apiUrl,
      }),
    getVersionControlClient: (parameters) =>
      getVersionControlClient({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),

    getManagerClient: (parameters) =>
      getManagerClient({
        ...parameters,
        signingCosmWasmClient,
        sender,
      }),
    getProxyClient: (parameters) =>
      getProxyClient({
        ...parameters,
        signingCosmWasmClient,
        sender,
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
