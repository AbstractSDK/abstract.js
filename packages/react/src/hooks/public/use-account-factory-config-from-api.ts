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
  PublicClient | undefined,
  (
    | NonNullable<
        Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
      >['extra']
    | undefined
  ),
]
type QueryResult = UseQueryReturnType<QueryData, QueryError>

type QueryOptions = UseQueryParameters<
  QueryFnData,
  QueryError,
  QueryData,
  QueryKey
>

export type UseAccountFactoryConfigFromApi = WithArgs<
  Parameters<PublicClient['getAccountFactoryQueryClientFromApi']>[0]
> & { chainName?: string | undefined; query?: QueryOptions }

export function useAccountFactoryConfigFromApi({
  chainName,
  query = {},
  ...parameters
}: UseAccountFactoryConfigFromApi): QueryResult {
  const { extra } = parameters ?? {}
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountFactoryConfigFromApi', publicClient, extra] as const,
    [publicClient, extra],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    async ({ queryKey: [_, publicClient, extra] }) => {
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
