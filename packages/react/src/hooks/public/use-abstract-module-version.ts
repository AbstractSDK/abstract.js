import { PublicClient } from '@abstract-money/core/clients'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'
import { WithArgs } from '../../types/args'
import { UseQueryParameters, useQuery } from '../../types/queries'
import { MaybeChainName } from './index'

type QueryFnData = Awaited<ReturnType<PublicClient['getAbstractModuleVersion']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'abstractModuleVersion',
  MaybeChainName,
  PublicClient | undefined,
  UseAbstractModuleVersionParameters['args'],
  Parameters<PublicClient['getAbstractModuleVersion']>[0]['extra'],
]

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>

export type UseAbstractModuleVersionParameters<TData = QueryData> = WithArgs<
  Parameters<PublicClient['getAbstractModuleVersion']>[0]
> & { chainName?: string | undefined; query?: QueryOptions<TData> }
export function useAbstractModuleVersion<TData = QueryData>({
  args,
  extra,
  chainName,
  query = {},
}: UseAbstractModuleVersionParameters<TData>) {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      ['abstractModuleVersion', chainName, publicClient, args, extra] as const,
    [publicClient, chainName, args, extra],
  )

  const enabled = Boolean(publicClient && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, _chainName, publicClient, args, extra] }) => {
      if (!publicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return publicClient.getAbstractModuleVersion({ ...args, extra })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
