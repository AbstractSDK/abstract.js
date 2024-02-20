import { PublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'

type QueryFnData = Awaited<
  ReturnType<PublicClient['getAccountFactoryQueryClientFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountFactoryQueryClientFromApi',
  PublicClient | undefined,
]
type QueryResult = UseQueryResult<QueryData, QueryError>

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
export function useAccountFactoryQueryClientFromApi(
  chainName?: string,
  options: QueryOptions = { enabled: true },
): QueryResult {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountFactoryQueryClientFromApi', publicClient] as const,
    [publicClient],
  )

  const enabled = React.useMemo(
    () => Boolean(publicClient && options?.enabled),
    [options?.enabled, publicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('No client')

    return publicClient.getAccountFactoryQueryClientFromApi({ args: {} })
  }, [publicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
