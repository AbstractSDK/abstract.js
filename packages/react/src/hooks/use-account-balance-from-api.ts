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

type QueryFnData = Awaited<ReturnType<ApiClient['getAccountBalancesFromApi']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBalancesFromApi',
  ApiClient | undefined,
  WithArgs<Parameters<ApiClient['getAccountBalancesFromApi']>[0]>['args'],
  NonNullable<Parameters<ApiClient['getAccountBalancesFromApi']>[0]>['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountBalancesFromApiParameters<TData = QueryData> = WithArgs<
  Parameters<ApiClient['getAccountBalancesFromApi']>[0]
> & {
  query?: QueryOptions<TData>
}

export function useAccountBalancesFromApi<TData = QueryData>({
  args,
  extra,
  query = {},
}: UseAccountBalancesFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['accountBalancesFromApi', client, args, extra] as const,
    [args, client, extra],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, client, args, extra] }) => {
      if (!client || !args) throw new Error('No client or accountid')

      return client.getAccountBalancesFromApi({ ...args, ...extra })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
