import { PublicClient } from '@abstract-money/core'
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

type QueryFnData = Awaited<ReturnType<PublicClient['getRemoteHosts']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'getRemoteHosts',
  MaybeChainName,
  PublicClient | undefined,
  (
    | NonNullable<Parameters<PublicClient['getRemoteHosts']>[0]>['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseRemoteHostsParameters<TData = QueryData> = WithArgs<
  Parameters<PublicClient['getRemoteHosts']>[0]
> & { chainName?: string | undefined; query?: QueryOptions<TData> }

export function useRemoteHosts<TData = QueryData>({
  chainName,
  extra,
  query = {},
}: UseRemoteHostsParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getRemoteHosts', chainName, publicClient, extra] as const,
    [chainName, publicClient, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, _chainName, publicClient, extra] }) => {
      if (!publicClient) throw new Error('No client')

      return publicClient.getRemoteHosts(extra ? { extra } : undefined)
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
