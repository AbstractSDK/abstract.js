import {
  ABSTRACT_API_URL,
  AbstractClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core/legacy'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from 'src/contexts'
import { useSenderAddress, useSigningCosmWasmClient } from 'src/hooks'

export async function getAbstractClient({
  sender,
  chainName,
  client,
  overrideApiUrl = ABSTRACT_API_URL,
}: {
  sender: string
  client: SigningCosmWasmClient
  chainName: string
  overrideApiUrl?: string
}) {
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain: chainName,
  })

  const {
    ansHost: ansHostAddress,
    registry: registryAddress,
    accountFactory: factoryAddress,
  } = data.deployment

  return new AbstractClient(
    {
      sender,
      client,
      ansHostAddress,
      registryAddress,
      factoryAddress,
    },
    { apiUrl: overrideApiUrl },
  )
}

export function useAbstractClient(
  {
    chainName,
  }: {
    chainName: string | undefined
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AbstractClient | undefined,
    unknown,
    AbstractClient | undefined,
    readonly [
      'abstract-client',
      string | undefined,
      string | undefined,
      string,
      SigningCosmWasmClient | undefined,
    ]
  > = {},
) {
  const { apiUrl } = useConfig()

  const {
    data: client,
    isLoading: isSigningCosmWasmClientLoading,
    isError: isSigningCosmWasmClientError,
    error: signingCosmWasmClientError,
  } = useSigningCosmWasmClient({ chainName })
  const {
    data: sender,
    isLoading: isSenderLoading,
    isError: isSenderError,
    error: senderError,
  } = useSenderAddress({ chainName })

  const queryKey = React.useMemo(
    () => ['abstract-client', sender, chainName, apiUrl, client] as const,
    [sender, chainName, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!sender) throw new Error('sender is not defined')
    if (!chainName) throw new Error('chain is not defined')

    return getAbstractClient({
      sender,
      client,
      chainName: chainName,
      overrideApiUrl: apiUrl,
    })
  }, [client, chainName, apiUrl])

  const enabled = React.useMemo(
    () => Boolean(client && chainName && enabled_),
    [enabled_, client, chainName],
  )

  const { data, isLoading, isError, error } = useQuery(queryKey, queryFn, {
    enabled,
    ...rest,
  })

  if (isSigningCosmWasmClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: signingCosmWasmClientError,
    } as const
  if (isSenderError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: senderError,
    } as const
  if (isError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error,
    } as const
  if (isSigningCosmWasmClientLoading || isSenderLoading || isLoading)
    return {
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
    } as const
  return {
    data,
    isLoading: false,
    isError: false,
    isSuccess: true,
  } as const
}
