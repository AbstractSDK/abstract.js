import { PublicClient } from '@abstract-money/core/clients'
import React from 'react'
import { useConfig } from '../../contexts'
import { WithArgs } from '../../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../types/queries'

type QueryFnData = Awaited<
  ReturnType<PublicClient['getAccountFactoryQueryClientFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountFactoryQueryClientFromApi',
  PublicClient | undefined,
]
type QueryResult = UseQueryReturnType<QueryData, QueryError>

type QueryOptions = UseQueryParameters<
  QueryFnData,
  QueryError,
  QueryData,
  QueryKey
>

export type UseAccountFactoryQueryClientFromApi = WithArgs<
  Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
> & { chainName?: string | undefined; query?: QueryOptions }

export function useAccountFactoryQueryClientFromApi({
  chainName,
  query = {},
}: UseAccountFactoryQueryClientFromApi): QueryResult {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountFactoryQueryClientFromApi', publicClient] as const,
    [publicClient],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('No client')

    return publicClient.getAccountFactoryQueryClientFromApi({})
  }, [publicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
