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
    client,
    chainName,
  }: {
    chainName: string | undefined
    client: CosmWasmClient | undefined
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

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
