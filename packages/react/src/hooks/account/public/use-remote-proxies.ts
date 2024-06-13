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
  ReturnType<AccountPublicClient['getRemoteAccountProxies']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'getRemoteAccountProxies',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getRemoteAccountProxies']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export type UseRemoteProxiesParameters = WithArgs<
  Parameters<AccountPublicClient['getRemoteAccountProxies']>[0]
> & {
  query?: QueryOptions
  chainName: string | undefined
  accountId: AccountId | undefined
}

/**
 * Get the proxy addresses of the remote accounts.
 * @param accountId
 * @param extra
 * @param chainName
 * @param query
 */
export function useRemoteProxies({
  accountId,
  extra,
  chainName,
  query = {},
}: UseRemoteProxiesParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getRemoteAccountProxies', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && (query.enabled ?? true)),
    [query.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getRemoteAccountProxies(
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
