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

type QueryFnData = Awaited<ReturnType<PublicClient['getRemoteHosts']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'getRemoteHosts',
  PublicClient | undefined,
  (
    | NonNullable<Parameters<PublicClient['getRemoteHosts']>[0]>['extra']
    | undefined
  ),
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseRemoteHostsParameters = WithArgs<
  Parameters<PublicClient['getRemoteHosts']>[0]
> & { chainName?: string | undefined; query?: QueryOptions }

export function useRemoteHosts({
  chainName,
  extra,
  query = {},
}: UseRemoteHostsParameters): QueryResult {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getRemoteHosts', publicClient, extra] as const,
    [publicClient, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, publicClient, extra] }) => {
      if (!publicClient) throw new Error('No client')

      return publicClient.getRemoteHosts(extra ? { extra } : undefined)
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
