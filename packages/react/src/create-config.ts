import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import {
  ApiClient,
  createPublicClient,
  createWalletClient,
  createAccountPublicClient,
  createAccountWalletClient,
  PublicClient,
  createApiClient,
  WalletClient,
  AccountPublicClient,
  AccountId,
  AccountWalletClient,
} from '@abstract-money/core'
import { useMemo } from 'react'

type CosmosKitArgs = { chainName?: string }

export type GrazProvider = {
  name: 'graz'
  useCosmWasmClient: () => CosmWasmClient | undefined
  useSigningCosmWasmClient: () => SigningCosmWasmClient | undefined
  useSenderAddress: () => string | undefined
}

export type CosmosKitProvider = {
  name: 'cosmos-kit'
  useCosmWasmClient: (args: CosmosKitArgs) => CosmWasmClient | undefined
  useSigningCosmWasmClient: (
    args: CosmosKitArgs,
  ) => SigningCosmWasmClient | undefined
  useSenderAddress: (args: CosmosKitArgs) => string | undefined
}

export type Provider = GrazProvider | CosmosKitProvider

export type CreateConfigParameters<provider extends Provider> = {
  provider: provider
  apiUrl: string
}

export function createConfig<TProvider extends Provider>(
  parameters: CreateConfigParameters<TProvider>,
) {
  const { apiUrl, provider } = parameters

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Set up clients
  /////////////////////////////////////////////////////////////////////////////////////////////////

  function useApiClient(): ApiClient {
    return useMemo(
      () =>
        createApiClient({
          apiUrl,
        }),
      [apiUrl],
    )
  }

  type ProviderAgnosticArgs = TProvider['name'] extends 'graz'
    ? Parameters<GrazProvider['useCosmWasmClient']>
    : Parameters<CosmosKitProvider['useCosmWasmClient']>
  function usePublicClient(
    ...args: ProviderAgnosticArgs
  ): PublicClient | undefined {
    const cosmWasmClient = provider.useCosmWasmClient(...(args as [any]))
    return useMemo(() => {
      if (!cosmWasmClient) return undefined
      return createPublicClient({
        apiUrl,
        cosmWasmClient,
      })
    }, [apiUrl, cosmWasmClient])
  }

  function useWalletClient(
    ...args: ProviderAgnosticArgs
  ): WalletClient | undefined {
    const signingCosmWasmClient = provider.useSigningCosmWasmClient(
      ...(args as [any]),
    )
    const sender = provider.useSenderAddress(...(args as [any]))
    return useMemo(() => {
      if (!signingCosmWasmClient || !sender) return undefined
      return createWalletClient({
        apiUrl,
        sender,
        signingCosmWasmClient,
      })
    }, [apiUrl, signingCosmWasmClient, sender])
  }

  function useAccountPublicClient({
    accountId,
    ...rest
  }: ProviderAgnosticArgs[0] extends undefined
    ? { accountId?: AccountId }
    : ProviderAgnosticArgs[0] & { accountId?: AccountId }):
    | AccountPublicClient
    | undefined {
    const cosmWasmClient = provider.useCosmWasmClient(...(rest as [any]))
    return useMemo(() => {
      if (!cosmWasmClient || !accountId) return undefined
      return createAccountPublicClient({
        apiUrl,
        cosmWasmClient,
        accountId,
      })
    }, [apiUrl, cosmWasmClient, accountId])
  }

  function useAccountWalletClient({
    accountId,
    ...rest
  }: ProviderAgnosticArgs[0] extends undefined
    ? { accountId?: AccountId }
    : ProviderAgnosticArgs[0] & { accountId?: AccountId }):
    | AccountWalletClient
    | undefined {
    const signingCosmWasmClient = provider.useSigningCosmWasmClient(
      ...(rest as [any]),
    )
    const sender = provider.useSenderAddress(...(rest as [any]))
    return useMemo(() => {
      if (!signingCosmWasmClient || !sender || !accountId) return undefined
      return createAccountWalletClient({
        apiUrl,
        sender,
        signingCosmWasmClient,
        accountId,
      })
    }, [apiUrl, signingCosmWasmClient, sender, accountId])
  }

  return {
    apiUrl,
    provider,
    useApiClient,
    usePublicClient,
    useWalletClient,
    useAccountPublicClient,
    useAccountWalletClient,
  }
}
