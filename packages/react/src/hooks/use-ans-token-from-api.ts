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

type QueryFnData = Awaited<ReturnType<ApiClient['getAnsTokenFromApi']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'ansTokenFromApi',
  ApiClient | undefined,
  WithArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]>['args'],
  NonNullable<Parameters<ApiClient['getAnsTokenFromApi']>[0]>['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAnsTokenFromApiParameters = WithArgs<
  Parameters<ApiClient['getAnsTokenFromApi']>[0]
> & {
  query?: QueryOptions
}

export function useAnsTokenFromApi({
  args,
  extra,
  query = {},
}: UseAnsTokenFromApiParameters): QueryResult {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['ansTokenFromApi', client, args, extra] as const,
    [args, client, extra],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, client, args, extra] }) => {
      if (!client || !args) throw new Error('No client or owner or chain')

      return client.getAnsTokenFromApi({ ...args, ...extra })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
