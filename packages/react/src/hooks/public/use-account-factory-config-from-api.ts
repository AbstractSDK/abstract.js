import { PublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'

type QueryFnData = Awaited<
  ReturnType<
    Awaited<
      ReturnType<PublicClient['getAccountFactoryQueryClientFromApi']>
    >['config']
  >
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountFactoryConfigFromApi',
  PublicClient | undefined,
]
type QueryResult = UseQueryResult<QueryData, QueryError>

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
export function useAccountFactoryConfigFromApi(
  chainName?: string,
  options: QueryOptions = { enabled: true },
): QueryResult {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountFactoryConfigFromApi', publicClient] as const,
    [publicClient],
  )

  const enabled = React.useMemo(
    () => Boolean(publicClient && options?.enabled),
    [options?.enabled, publicClient],
  )

  const queryFn = React.useCallback(async () => {
    if (!publicClient) throw new Error('No client')

    const accountFactoryQueryClient =
      await publicClient.getAccountFactoryQueryClientFromApi({ args: {} })
    const config = await accountFactoryQueryClient.config()
    return config
  }, [publicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
