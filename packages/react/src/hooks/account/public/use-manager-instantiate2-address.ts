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
  ReturnType<AccountPublicClient['getManagerInstantiate2Address']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'managerInstantiate2Address',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getManagerInstantiate2Address']>[0]
      >['extra']
  ),
]

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseManagerInstantiate2AddressParameters<TData = QueryData> =
  WithArgs<
    Parameters<AccountPublicClient['getManagerInstantiate2Address']>[0]
  > & {
    query?: QueryOptions<TData>
    chainName: string | undefined
    accountId: AccountId | undefined
  }
export function useManagerInstantiate2Address<TData = QueryData>({
  accountId,
  chainName,
  extra,
  query = {},
}: UseManagerInstantiate2AddressParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['managerInstantiate2Address', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getManagerInstantiate2Address(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
