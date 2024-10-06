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

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getAccountAddress']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountAddress',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getAccountAddress']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountAddressFromApiParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['getAccountAddress']>[0]
> & {
  chainName?: string | undefined
  query?: QueryOptions<TData>
  accountId: AccountId | undefined
}

export function useAccountAddressFromApi<TData = QueryData>({
  accountId,
  chainName,
  extra,
  query = {},
}: UseAccountAddressFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountAddress', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getAccountAddress(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
