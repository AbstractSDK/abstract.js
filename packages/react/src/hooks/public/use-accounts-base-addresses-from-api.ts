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

type QueryFnData = Awaited<ReturnType<PublicClient['getAccountsBaseAddresses']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountAddress',
  MaybeChainName,
  PublicClient | undefined,
  WithArgs<Parameters<PublicClient['getAccountsBaseAddresses']>[0]>['args'],
  (
    | NonNullable<
        Parameters<PublicClient['getAccountsBaseAddresses']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountsBaseAddressesFromApiParameters<TData = QueryData> =
  WithArgs<Parameters<PublicClient['getAccountsBaseAddresses']>[0]> & {
    chainName?: string | undefined
    query?: QueryOptions<TData>
  }

export function useAccountsBaseAddressesFromApi<TData = QueryData>({
  chainName,
  args,
  extra,
  query = {},
}: UseAccountsBaseAddressesFromApiParameters<TData>): QueryResult<TData> {
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

      return accountPublicClient.getAccountsBaseAddresses({ extra, ...args })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
