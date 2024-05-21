import { PublicClient } from '@abstract-money/core/clients'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'
import { WithArgs } from '../../types/args'
import { UseQueryParameters, useQuery } from '../../types/queries'

type QueryFnData = Awaited<ReturnType<PublicClient['getAbstractModuleVersion']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'abstractModuleVersion',
  PublicClient | undefined,
  UseAbstractModuleVersionParameters['args'],
  Parameters<PublicClient['getAbstractModuleVersion']>[0]['extra'],
]

type QueryOptions = UseQueryParameters<
  QueryFnData,
  QueryError,
  QueryData,
  QueryKey
>

export type UseAbstractModuleVersionParameters = WithArgs<
  Parameters<PublicClient['getAbstractModuleVersion']>[0]
> & { chainName?: string | undefined; query?: QueryOptions }
export function useAbstractModuleVersion({
  args,
  extra,
  chainName,
  query = {},
}: UseAbstractModuleVersionParameters) {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['abstractModuleVersion', publicClient, args, extra] as const,
    [publicClient, args, extra],
  )

  const enabled = Boolean(publicClient && args && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, publicClient, args, extra] }) => {
      if (!publicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return publicClient.getAbstractModuleVersion({ ...args, extra })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
