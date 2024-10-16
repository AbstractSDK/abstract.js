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

type QueryFnData = Awaited<
  ReturnType<ApiClient['getSubAccountIdsByModuleIdFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'subAccountIdsByModuleIdFromApi',
  ApiClient | undefined,
  WithArgs<
    Parameters<ApiClient['getSubAccountIdsByModuleIdFromApi']>[0]
  >['args'],
  (
    | NonNullable<
        Parameters<ApiClient['getSubAccountIdsByModuleIdFromApi']>[0]
      >['extra']
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseSubAccountIdsByModuleIdFromApiParameters<TData = QueryData> =
  WithArgs<Parameters<ApiClient['getSubAccountIdsByModuleIdFromApi']>[0]> & {
    query?: QueryOptions<TData>
  }

export function useSubAccountIdsByModuleIdFromApi<TData = QueryData>({
  args,
  extra,
  query = {},
}: UseSubAccountIdsByModuleIdFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['subAccountIdsByModuleIdFromApi', client, args, extra] as const,
    [args, client, extra],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, client, args, extra] }) => {
      if (!client || !args) throw new Error('No client or accountid')

      return client.getSubAccountIdsByModuleIdFromApi({
        ...args,
        ...extra,
      })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
