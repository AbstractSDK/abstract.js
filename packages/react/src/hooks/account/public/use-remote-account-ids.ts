import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
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
type UseRemoteAccountIdsFromApiArgs = WithArgs<
  Parameters<AccountPublicClient['getRemoteAccountIds']>[0]
>
type QueryKey = readonly [
  'getRemoteAccountIds',
  AccountPublicClient | undefined,
  AccountId | undefined,
  UseRemoteAccountIdsFromApiArgs['args'],
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
  args,
  accountId,
  chainName,
  query = {},
}: UseRemoteAccountIdsParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName: chainName,
  })
  const queryKey = React.useMemo(
    () =>
      ['getRemoteAccountIds', accountPublicClient, accountId, args] as const,
    [accountPublicClient, accountId, args],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && args && (query.enabled ?? true)),
    [query.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return accountPublicClient.getRemoteAccountIds({
      args,
    })
  }, [accountPublicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
