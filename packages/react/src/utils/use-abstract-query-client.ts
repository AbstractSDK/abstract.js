import {
  ABSTRACT_API_URL,
  AbstractQueryClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core/legacy'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from 'src/contexts'
import { useCosmWasmClient } from 'src/hooks'

async function getAbstractQueryClient({
  client,
  chainName,
  overrideApiUrl = ABSTRACT_API_URL,
}: {
  client: CosmWasmClient
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

  return new AbstractQueryClient(
    {
      client,
      ansHostAddress,
      registryAddress,
      factoryAddress,
    },
    { apiUrl: overrideApiUrl },
  )
}

export function useAbstractQueryClient(
  {
    chainName,
  }: {
    chainName: string | undefined
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AbstractQueryClient | undefined,
    unknown,
    AbstractQueryClient | undefined,
    readonly [
      'abstract-query-client',
      string | undefined,
      string,
      CosmWasmClient | undefined,
    ]
  > = {},
) {
  const { apiUrl } = useConfig()

  const {
    data: client,
    isLoading: isCosmWasmClientLoading,
    isError: isCosmWasmClientError,
    error: cosmWasmClientError,
  } = useCosmWasmClient({ chainName })

  const queryKey = React.useMemo(
    () => ['abstract-query-client', chainName, apiUrl, client] as const,
    [chainName, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!chainName) throw new Error('chain is not defined')

    return getAbstractQueryClient({
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

  if (isCosmWasmClientError)
    return {
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: cosmWasmClientError,
    } as const

  if (isError)
    return {
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error,
    } as const
  if (isCosmWasmClientLoading || isLoading)
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
    isSuccess: false,
  } as const
}
