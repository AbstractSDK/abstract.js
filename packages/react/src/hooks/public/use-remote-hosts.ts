import { PublicClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'

type QueryFnData = Awaited<ReturnType<PublicClient['getRemoteHosts']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'remoteHosts',
  PublicClient | undefined,
  string | undefined,
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>

type GetRemoteHostsArgs = { chainName: string | undefined }
export function useRemoteHosts(
  chainName: string | undefined,
  options: QueryOptions = { enabled: true },
) {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['remoteHosts', publicClient, chainName] as const,
    [publicClient],
  )

  const enabled = React.useMemo(
    () => Boolean(publicClient && options?.enabled),
    [options?.enabled, publicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('No client')

    return publicClient.getRemoteHosts({
      args: {},
    })
  }, [publicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
