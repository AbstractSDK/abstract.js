import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useConfig } from '../contexts'
import { useSenderAddress, useSigningCosmWasmClient } from '../hooks'
import { UseQueryParameters, useQuery } from '../types/queries'

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

type QueryKey = readonly [
  'abstract-client',
  string | undefined,
  string | undefined,
  string | undefined,
  string,
]

export type UseAbstractClientParameters = {
  chainName: string | undefined
  sender?: string | undefined
  query?: UseQueryParameters<
    AbstractClient | undefined,
    unknown,
    AbstractClient | undefined,
    QueryKey
  >
}

export function useAbstractClient(parameters: UseAbstractClientParameters) {
  const { chainName, query = {}, sender: sender_ } = parameters ?? {}
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
    () => ['abstract-client', sender_, sender, chainName, apiUrl] as const,
    [sender_, sender, chainName, apiUrl],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    const txSender = sender_ ?? sender
    if (!txSender) throw new Error('sender is not defined')
    if (!chainName) throw new Error('chain is not defined')

    return getAbstractClient({
      sender: txSender,
      client,
      chainName: chainName,
      overrideApiUrl: apiUrl,
    })
  }, [sender_, sender, client, chainName, apiUrl])

  const enabled = Boolean(client && chainName && (query.enabled ?? true))

  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn,
    ...query,
    enabled,
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
