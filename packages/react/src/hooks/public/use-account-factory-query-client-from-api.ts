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

type QueryFnData = Awaited<
  ReturnType<PublicClient['getAccountFactoryQueryClientFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountFactoryQueryClientFromApi',
  MaybeChainName,
  PublicClient | undefined,
  NonNullable<
    Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
  >['extra'],
]
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>

export type UseAccountFactoryQueryClientFromApi<TData = QueryData> = WithArgs<
  Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
> & { chainName?: string | undefined; query?: QueryOptions<TData> }

export function useAccountFactoryQueryClientFromApi<TData = QueryData>({
  chainName,
  extra,
  query = {},
}: UseAccountFactoryQueryClientFromApi<TData>): QueryResult<TData> {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'accountFactoryQueryClientFromApi',
        chainName,
        publicClient,
        extra,
      ] as const,
    [chainName, publicClient, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, _chainName, publicClient, extra] }) => {
      if (!publicClient) throw new Error('No client')

      return publicClient.getAccountFactoryQueryClientFromApi(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
