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
import { CutArgs } from '../../types/with-args'

type CutSigningCosmWasmClientAndSenderFromParameter<
  T extends (payload: any) => any,
> = CutArgs<
  {
    readonly signingCosmWasmClient: SigningCosmWasmClient
    readonly sender: string
  },
  T
>

type CutSigningCosmWasmClientAndApiUrlFromParameter<
  T extends (payload: any) => any,
> = CutArgs<
  {
    readonly signingCosmWasmClient: SigningCosmWasmClient
    readonly sender: string
    readonly apiUrl: string
  },
  T
>

export type WalletActions = {
  createAccount(
    args: CutSigningCosmWasmClientAndApiUrlFromParameter<typeof createAccount>,
  ): ReturnType<typeof createAccount>
  createAccountMonarchy(
    args: CutSigningCosmWasmClientAndApiUrlFromParameter<
      typeof createAccountMonarchy
    >,
  ): ReturnType<typeof createAccountMonarchy>
  getAccountFactoryClient(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getAccountFactoryClient
    >,
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromVersionControl(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getAccountFactoryClientFromVersionControl
    >,
  ): ReturnType<typeof getAccountFactoryClientFromVersionControl>
  getAccountFactoryClientFromApi(
    args: CutSigningCosmWasmClientAndApiUrlFromParameter<
      typeof getAccountFactoryClientFromApi
    >,
  ): ReturnType<typeof getAccountFactoryClientFromApi>
  getAnsHostClient(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getAnsHostClient
    >,
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    args: CutSigningCosmWasmClientAndApiUrlFromParameter<
      typeof getAnsHostClientFromApi
    >,
  ): ReturnType<typeof getAnsHostClientFromApi>
  getAnsHostClientFromVersionControl(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getAnsHostClientFromVersionControl
    >,
  ): ReturnType<typeof getAnsHostClientFromVersionControl>
  getVersionControlClient(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getVersionControlClient
    >,
  ): ReturnType<typeof getVersionControlClient>
  getVersionControlClientFromApi(
    args: CutSigningCosmWasmClientAndApiUrlFromParameter<
      typeof getVersionControlClientFromApi
    >,
  ): ReturnType<typeof getVersionControlClientFromApi>
  getManagerClient(
    args: CutSigningCosmWasmClientAndSenderFromParameter<
      typeof getManagerClient
    >,
  ): ReturnType<typeof getManagerClient>
  getProxyClient(
    args: CutSigningCosmWasmClientAndSenderFromParameter<typeof getProxyClient>,
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
    createAccount: ({ args, ...rest }) =>
      createAccount({
        args: { ...args, signingCosmWasmClient, sender, apiUrl },
        ...rest,
      }),
    createAccountMonarchy: ({ args, ...rest }) =>
      createAccountMonarchy({
        args: { ...args, signingCosmWasmClient, sender, apiUrl },
        ...rest,
      }),

    getAccountFactoryClient: ({ args, ...rest }) =>
      getAccountFactoryClient({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),
    getAccountFactoryClientFromVersionControl: ({ args, ...rest }) =>
      getAccountFactoryClientFromVersionControl({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),
    getAccountFactoryClientFromApi: ({ args, ...rest }) =>
      getAccountFactoryClientFromApi({
        args: { ...args, signingCosmWasmClient, sender, apiUrl },
        ...rest,
      }),

    getAnsHostClient: ({ args, ...rest }) =>
      getAnsHostClient({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),
    getAnsHostClientFromApi: ({ args, ...rest }) =>
      getAnsHostClientFromApi({
        args: { ...args, signingCosmWasmClient, sender, apiUrl },
        ...rest,
      }),
    getAnsHostClientFromVersionControl: ({ args, ...rest }) =>
      getAnsHostClientFromVersionControl({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),

    getVersionControlClientFromApi: ({ args, ...rest }) =>
      getVersionControlClientFromApi({
        args: { ...args, signingCosmWasmClient, sender, apiUrl },
        ...rest,
      }),
    getVersionControlClient: ({ args, ...rest }) =>
      getVersionControlClient({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),

    getManagerClient: ({ args, ...rest }) =>
      getManagerClient({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),
    getProxyClient: ({ args, ...rest }) =>
      getProxyClient({
        args: { ...args, signingCosmWasmClient, sender },
        ...rest,
      }),
    getSigningCosmWasmClient: () =>
      getSigningCosmWasmClient({
        args: { signingCosmWasmClient },
      }),
    getSenderAddress: () =>
      getSenderAddress({
        args: { sender },
      }),
  }
}
