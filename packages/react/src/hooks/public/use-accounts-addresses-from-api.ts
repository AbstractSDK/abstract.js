import { PublicClient } from '@abstract-money/core/clients'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'
import { WithArgs } from '../../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../types/queries'
import { MaybeChainName } from './index'

type QueryFnData = Awaited<ReturnType<PublicClient['getAccountsAddresses']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountAddress',
  MaybeChainName,
  PublicClient | undefined,
  WithArgs<Parameters<PublicClient['getAccountsAddresses']>[0]>['args'],
  (
    | NonNullable<Parameters<PublicClient['getAccountsAddresses']>[0]>['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountsAddressesFromApiParameters<TData = QueryData> = WithArgs<
  Parameters<PublicClient['getAccountsAddresses']>[0]
> & {
  chainName?: string | undefined
  query?: QueryOptions<TData>
}

export function useAccountsAddressesFromApi<TData = QueryData>({
  chainName,
  args,
  extra,
  query = {},
}: UseAccountsAddressesFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      ['accountAddress', chainName, accountPublicClient, args, extra] as const,
    [accountPublicClient, chainName, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, _chainName, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient || !args) throw new Error('No client or args')

      return accountPublicClient.getAccountsAddresses({ extra, ...args })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
