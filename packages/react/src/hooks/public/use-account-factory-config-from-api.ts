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
  ReturnType<
    Awaited<
      ReturnType<PublicClient['getAccountFactoryQueryClientFromApi']>
    >['config']
  >
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountFactoryConfigFromApi',
  MaybeChainName,
  PublicClient | undefined,
  (
    | NonNullable<
        Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
      >['extra']
    | undefined
  ),
]
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>

export type UseAccountFactoryConfigFromApi<TData = QueryData> = WithArgs<
  Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
> & { chainName?: string | undefined; query?: QueryOptions<TData> }

export function useAccountFactoryConfigFromApi<TData = QueryData>({
  chainName,
  query = {},
  ...parameters
}: UseAccountFactoryConfigFromApi<TData>): QueryResult<TData> {
  const { extra } = parameters ?? {}
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      ['accountFactoryConfigFromApi', chainName, publicClient, extra] as const,
    [publicClient, chainName, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    async ({ queryKey: [_, _chainName, publicClient, extra] }) => {
      if (!publicClient) throw new Error('No client')

      const accountFactoryQueryClient =
        await publicClient.getAccountFactoryQueryClientFromApi(
          extra ? { extra } : undefined,
        )
      const config = await accountFactoryQueryClient.config()
      return config
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
