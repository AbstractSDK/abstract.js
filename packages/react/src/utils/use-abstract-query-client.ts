import {
  ABSTRACT_API_URL,
  AbstractQueryClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from 'src/contexts'

async function getAbstractQueryClient({
  client,
  chain,
  overrideApiUrl = ABSTRACT_API_URL,
}: {
  client: CosmWasmClient
  chain: string
  overrideApiUrl?: string
}) {
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain,
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
    chain,
  }: {
    chain: string | undefined
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
    () => ['abstract-query-client', chain, apiUrl, client] as const,
    [chain, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!chain) throw new Error('chain is not defined')

    return getAbstractQueryClient({
      client,
      chain,
      overrideApiUrl: apiUrl,
    })
  }, [client, chain, apiUrl])

  const enabled = React.useMemo(
    () => Boolean(client && chain && enabled_),
    [enabled_, client, chain],
  )

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
