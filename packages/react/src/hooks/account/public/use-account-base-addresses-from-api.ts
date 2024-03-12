import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../../contexts'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getAccountBaseAddresses']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBaseAddresses',
  AccountPublicClient | undefined,
  AccountId | undefined,
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export function useAccountBaseAddressesFromApi(
  { accountId }: { accountId: AccountId | undefined },
  options: QueryOptions = { enabled: true },
): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName: accountId?.chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountBaseAddresses', accountPublicClient, accountId] as const,
    [accountPublicClient, accountId],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && options.enabled),
    [options.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')

    return accountPublicClient.getAccountBaseAddresses({ args: {} })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
