import { AccountPublicClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../../contexts'
import { WithArgs } from '../../../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../../types/queries'

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getSubAccountIds']>>

type QueryError = unknown
type QueryData = QueryFnData
export type UseSubAccountIdsFromApiParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['getSubAccountIds']>[0]
> & {
  query?: QueryOptions<TData>
  chainName: string | undefined
  accountId: AccountId | undefined
}
type QueryKey = readonly [
  'getSubAccountIdsFromApi',
  AccountPublicClient | undefined,
  NonNullable<Parameters<AccountPublicClient['getSubAccountIds']>[0]>['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export function useSubAccountIdsFromApi<TData = QueryData>({
  accountId,
  chainName,
  extra,
  query = {},
}: UseSubAccountIdsFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getSubAccountIdsFromApi', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getSubAccountIds(extra ? { extra } : undefined)
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
