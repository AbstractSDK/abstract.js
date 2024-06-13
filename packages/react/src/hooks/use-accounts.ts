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

type QueryFnData = Awaited<ReturnType<ApiClient['getAccountsByOwnerFromApi']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountsOf',
  ApiClient | undefined,
  WithArgs<Parameters<ApiClient['getAccountsByOwnerFromApi']>[0]>['args'],
  NonNullable<Parameters<ApiClient['getAccountsByOwnerFromApi']>[0]>['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountsParameters<TData = QueryData> = WithArgs<
  Parameters<ApiClient['getAccountsByOwnerFromApi']>[0]
> & {
  query?: QueryOptions<TData>
}

/**
 * Loads all accounts for a given owner and chain.
 * @param owner address of the owner. Will automatically translate to other chains' addresses.
 * @param chainName chain to load accounts for.
 */
export function useAccounts<TData = QueryData>({
  args,
  extra,
  query = {},
}: UseAccountsParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['accountsOf', client, args, extra] as const,
    [client, args, extra],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, client, args, extra] }) => {
      if (!client || !args) throw new Error('No client or owner or chain')

      return client.getAccountsByOwnerFromApi({
        ...args,
        ...extra,
      })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
