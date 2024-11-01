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

type QueryFnData = Awaited<ReturnType<PublicClient['predictAccountAddress']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'predictAccountAddress',
  PublicClient | undefined,
  WithArgs<Parameters<PublicClient['predictAccountAddress']>[0]>['args'],
  (
    | NonNullable<Parameters<PublicClient['predictAccountAddress']>[0]>['extra']
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

export type UsePredictAccountAddressParameters<TData = QueryData> = WithArgs<
  Parameters<PublicClient['predictAccountAddress']>[0]
> & {
  query?: QueryOptions<TData>
  chainName: string | undefined
}

export function usePredictAccountAddress<TData = QueryData>({
  chainName,
  args,
  extra,
  query = {},
}: UsePredictAccountAddressParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['predictAccountAddress', publicClient, args, extra] as const,
    [publicClient, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, publicClient, args, extra] }) => {
      if (!publicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return publicClient.predictAccountAddress({ extra, ...args })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
