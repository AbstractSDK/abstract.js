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
  ReturnType<AccountPublicClient['getModuleInstantiate2AddressFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'moduleInstantiate2AddressFromApi',
  AccountPublicClient | undefined,
  UseModuleInstantiate2AddressFromApiParameters['args'],
  (
    | Parameters<
        AccountPublicClient['getModuleInstantiate2AddressFromApi']
      >[0]['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseModuleInstantiate2AddressFromApiParameters<TData = QueryData> =
  WithArgs<
    Parameters<AccountPublicClient['getModuleInstantiate2AddressFromApi']>[0]
  > & {
    query?: QueryOptions<TData>
    chainName: string | undefined
    accountId: AccountId | undefined
  }
export function useModuleInstantiate2AddressFromApi<TData = QueryData>({
  args,
  accountId,
  chainName,
  extra,
  query = {},
}: UseModuleInstantiate2AddressFromApiParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'moduleInstantiate2AddressFromApi',
        accountPublicClient,
        args,
        extra,
      ] as const,
    [accountPublicClient, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return accountPublicClient.getModuleInstantiate2AddressFromApi({
        ...args,
        ...extra,
      })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
