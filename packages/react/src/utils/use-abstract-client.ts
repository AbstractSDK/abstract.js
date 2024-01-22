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

export async function getAbstractClient({
  sender,
  client,
  chain,
  overrideApiUrl = ABSTRACT_API_URL,
}: {
  sender: string
  client: SigningCosmWasmClient
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
    client,
    chain,
    sender,
  }: {
    chain: string | undefined
    sender: string | undefined
    client: SigningCosmWasmClient | undefined
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

  const queryKey = React.useMemo(
    () => ['abstract-client', sender, chain, apiUrl, client] as const,
    [sender, chain, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!sender) throw new Error('sender is not defined')
    if (!chain) throw new Error('chain is not defined')

    return getAbstractClient({
      sender,
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
