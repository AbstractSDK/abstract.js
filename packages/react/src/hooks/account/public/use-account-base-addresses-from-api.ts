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
  ReturnType<AccountPublicClient['getAccountBaseAddresses']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBaseAddresses',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getAccountBaseAddresses']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseAccountBaseAddressesFromApiParameters = WithArgs<
  Parameters<AccountPublicClient['getAccountBaseAddresses']>[0]
> & {
  chainName?: string | undefined
  query?: QueryOptions
  accountId: AccountId | undefined
}

export function useAccountBaseAddressesFromApi({
  accountId,
  chainName,
  extra,
  query = {},
}: UseAccountBaseAddressesFromApiParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountBaseAddresses', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getAccountBaseAddresses(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
