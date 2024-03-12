import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../../contexts'

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getSubAccountIds']>>

type QueryError = unknown
type QueryData = QueryFnData
type UseSubAccountIdsFromApiArgs = Parameters<
  AccountPublicClient['getSubAccountIds']
>[0]
type QueryKey = readonly [
  'getSubAccountIdsFromApi',
  AccountPublicClient | undefined,
  AccountId | undefined,
  UseSubAccountIdsFromApiArgs['args'],
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export function useSubAccountIdsFromApi(
  parameters: UseSubAccountIdsFromApiArgs & {
    accountId: AccountId | undefined
  },
  options: QueryOptions = { enabled: true },
): QueryResult {
  const { args, accountId } = parameters

  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName: accountId?.chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'getSubAccountIdsFromApi',
        accountPublicClient,
        accountId,
        args,
      ] as const,
    [accountPublicClient, accountId, args],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && args && options.enabled),
    [options.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return accountPublicClient.getSubAccountIds({
      args,
    })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
