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

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getAccountSettings']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountSettings',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getAccountSettings']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseAccountSettingsParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['getAccountSettings']>[0]
> & {
  accountId: AccountId | undefined
  chainName: string | undefined
  query?: QueryOptions<TData>
}

export function useAccountSettings<TData = QueryData>({
  accountId,
  extra,
  chainName,
  query = {},
}: UseAccountSettingsParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountSettings', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getAccountSettings(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
