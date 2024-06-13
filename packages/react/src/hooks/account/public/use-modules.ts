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

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getModules']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'modules',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getAccountBaseAddresses']>[0]
      >['extra']
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseModulesParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['getModules']>[0]
> & {
  accountId: AccountId | undefined
  chainName: string | undefined
  query?: QueryOptions<TData>
}

export function useModules<TData = QueryData>({
  accountId,
  chainName,
  extra,
  query = {},
}: UseModulesParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['modules', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getModules(extra ? { extra } : undefined)
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
