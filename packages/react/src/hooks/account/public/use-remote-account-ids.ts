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

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export type UseRemoteAccountIdsParameters = WithArgs<
  Parameters<AccountPublicClient['getRemoteAccountIds']>[0]
> & {
  query?: QueryOptions
  chainName: string | undefined
  accountId: AccountId | undefined
}

export function useRemoteAccountIds({
  accountId,
  extra,
  chainName,
  query = {},
}: UseRemoteAccountIdsParameters): QueryResult {
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
