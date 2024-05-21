import { PublicClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'
import { WithArgs } from '../../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../types/queries'

type QueryFnData = Awaited<ReturnType<PublicClient['getAccountsBaseAddresses']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBaseAddresses',
  PublicClient | undefined,
  WithArgs<Parameters<PublicClient['getAccountsBaseAddresses']>[0]>['args'],
  (
    | NonNullable<
        Parameters<PublicClient['getAccountsBaseAddresses']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseAccountsBaseAddressesFromApiParameters = WithArgs<
  Parameters<PublicClient['getAccountsBaseAddresses']>[0]
> & {
  chainName?: string | undefined
  query?: QueryOptions
  accountId: AccountId | undefined
}

export function useAccountsBaseAddressesFromApi({
  chainName,
  args,
  extra,
  query = {},
}: UseAccountsBaseAddressesFromApiParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountBaseAddresses', accountPublicClient, args, extra] as const,
    [accountPublicClient, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient || !args) throw new Error('No client or args')

      return accountPublicClient.getAccountsBaseAddresses({ extra, ...args })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
