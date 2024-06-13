import { ApiClient } from '@abstract-money/core/clients'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../types/queries'

type QueryFnData = Awaited<ReturnType<ApiClient['getModulesFromApi']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'modulesFromApi',
  ApiClient | undefined,
  WithArgs<Parameters<ApiClient['getModulesFromApi']>[0]>['args'],
  NonNullable<Parameters<ApiClient['getModulesFromApi']>[0]>['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseModulesFromApiParameters<TData = QueryData> = WithArgs<
  Parameters<ApiClient['getModulesFromApi']>[0]
> & {
  query?: QueryOptions<TData>
}

export function useModulesFromApi<TData = QueryData>({
  args,
  extra,
  query = {},
}: UseModulesFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['modulesFromApi', client, args, extra] as const,
    [args, client, extra],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback<
    QueryFunction<QueryFnData, QueryKey>
  >(() => {
    if (!client || !args) throw new Error('No client or owner or chain')

    return client.getModulesFromApi({
      ...args,
      ...extra,
    })
  }, [])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
