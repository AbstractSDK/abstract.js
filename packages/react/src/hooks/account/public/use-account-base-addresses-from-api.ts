import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParameters } from '../utils'

type QueryFnData = ReturnType<AccountPublicClient['getAccountBaseAddresses']>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBaseAddresses',
  AccountPublicClient | undefined,
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export function useAccountBaseAddressesFromApi(
  { accountId }: { accountId: AccountId | undefined },
  options?: QueryOptions,
): QueryResult
export function useAccountBaseAddressesFromApi(
  options?: QueryOptions,
): QueryResult

export function useAccountBaseAddressesFromApi(
  arg1?: { accountId: AccountId | undefined } | QueryOptions,
  arg2?: QueryOptions,
) {
  const { accountId: accountIdParameter, options } = parseParameters(arg1, arg2)

  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName: accountId?.chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountBaseAddresses', accountPublicClient] as const,
    [accountPublicClient],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && options?.enabled),
    [options?.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')

    return accountPublicClient.getAccountBaseAddresses({ args: {} })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
