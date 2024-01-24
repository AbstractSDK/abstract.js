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
  chainName,
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
    client,
    chainName,
    sender,
  }: {
    chainName: string | undefined
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

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
