import {
  ABSTRACT_API_URL,
  AccountId,
  AccountPublicClient,
  AccountWalletClient,
  ApiClient,
  PublicClient,
  WalletClient,
  createAccountPublicClient,
  createAccountWalletClient,
  createApiClient,
  createPublicClient,
  createWalletClient,
} from '@abstract-money/core'
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { useMemo } from 'react'
import { Evaluate } from './types/utils'

type CommonProviderArgs = {
  chainName: string | undefined
}

export type Provider = {
  useCosmWasmClient: (arg?: CommonProviderArgs) => CosmWasmClient | undefined
  useSigningCosmWasmClient: (
    arg?: CommonProviderArgs,
  ) => SigningCosmWasmClient | undefined
  useSenderAddress: (arg?: CommonProviderArgs) => string | undefined
}

export type CreateConfigParameters = {
  provider: Provider
  apiUrl?: string
}

export function createConfig(parameters: CreateConfigParameters) {
  const { apiUrl = ABSTRACT_API_URL, provider } = parameters

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

  function usePublicClient(
    ...args: Evaluate<Parameters<Provider['useCosmWasmClient']>>
  ): PublicClient | undefined {
    const cosmWasmClient = provider.useCosmWasmClient(...args)
    return useMemo(() => {
      if (!cosmWasmClient) {
        console.debug('usePublicClient: no cosmWasmClient')
        return undefined
      }
      return createPublicClient({
        apiUrl,
        cosmWasmClient,
      })
    }, [apiUrl, cosmWasmClient])
  }

  function useWalletClient(
    ...args: Evaluate<Parameters<Provider['useSigningCosmWasmClient']>>
  ): WalletClient | undefined {
    const signingCosmWasmClient = provider.useSigningCosmWasmClient(...args)
    const sender = provider.useSenderAddress(...args)
    return useMemo(() => {
      if (!signingCosmWasmClient || !sender) {
        console.debug('useWalletClient: no signingCosmWasmClient or sender', {
          signingCosmWasmClient,
          sender,
        })
        return undefined
      }
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
  }: Evaluate<
    { accountId: AccountId | undefined } & Parameters<
      Provider['useCosmWasmClient']
    >[0]
  >): AccountPublicClient | undefined {
    const cosmWasmClient = provider.useCosmWasmClient(rest)
    return useMemo(() => {
      if (!cosmWasmClient || !accountId) {
        console.debug(
          'useAccountPublicClient: no cosmWasmClient or accountId',
          {
            cosmWasmClient,
            accountId,
          },
        )
        return undefined
      }
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
  }: Evaluate<
    { accountId: AccountId | undefined } & Parameters<
      Provider['useSigningCosmWasmClient']
    >[0]
  >): AccountWalletClient | undefined {
    const signingCosmWasmClient = provider.useSigningCosmWasmClient(rest)
    const sender = provider.useSenderAddress(rest)
    return useMemo(() => {
      if (!signingCosmWasmClient || !sender || !accountId) {
        console.debug(
          'useAccountWalletClient: no signingCosmWasmClient, sender, or accountId',
          {
            signingCosmWasmClient,
            sender,
            accountId,
          },
        )
        return undefined
      }
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

export type Config = {
  apiUrl: string
  provider: Provider
  useApiClient(): ApiClient | undefined
  usePublicClient(
    ...args: Parameters<Provider['useCosmWasmClient']>
  ): PublicClient | undefined
  useWalletClient(
    ...args: Evaluate<Parameters<Provider['useSigningCosmWasmClient']>>
  ): WalletClient | undefined
  useAccountPublicClient(
    args: Evaluate<
      { accountId: AccountId | undefined } & Parameters<
        Provider['useCosmWasmClient']
      >[0]
    >,
  ): AccountPublicClient | undefined
  useAccountWalletClient(
    args: Evaluate<
      { accountId: AccountId | undefined } & Parameters<
        Provider['useCosmWasmClient']
      >[0]
    >,
  ): AccountWalletClient | undefined
}
