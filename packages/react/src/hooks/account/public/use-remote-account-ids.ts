import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  QueryFunction,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../../contexts'
import { WithArgs } from '../../../types/args'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getRemoteAccountIds']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'getRemoteAccountIds',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getRemoteAccountIds']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryOptions<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryResult<TData, QueryError>

export type UseRemoteAccountIdsParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['getRemoteAccountIds']>[0]
> & {
  query?: QueryOptions<TData>
  chainName: string | undefined
  accountId: AccountId | undefined
}

export function useRemoteAccountIds<TData = QueryData>({
  accountId,
  extra,
  chainName,
  query = {},
}: UseRemoteAccountIdsParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getRemoteAccountIds', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && (query.enabled ?? true)),
    [query.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getRemoteAccountIds(
        extra
          ? {
              extra,
            }
          : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
