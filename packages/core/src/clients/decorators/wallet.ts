import { getAnsHostClientFromApi } from '../../actions/wallet/get-ans-host-client-from-api'
import { getAnsHostClientFromVersionControl } from '../../actions/wallet/get-ans-host-client-from-version-control'
import { getVersionControlClientFromApi } from '../../actions/wallet/get-version-control-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createAccount } from '../../actions/wallet/create-account'
import { createAccountMonarchy } from '../../actions/wallet/create-account-monarchy'
import { getAccountClient } from '../../actions/wallet/get-account-client'
import { getAnsHostClient } from '../../actions/wallet/get-ans-host-client'
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
