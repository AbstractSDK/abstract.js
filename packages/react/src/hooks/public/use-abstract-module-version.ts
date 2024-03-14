import { PublicClient } from '@abstract-money/core/clients'
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
  string | undefined,
  UseAbstractModuleVersionParameters['args'],
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
  chainName,
  query = {},
}: UseAbstractModuleVersionParameters) {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['abstractModuleVersion', publicClient, chainName, args] as const,
    [publicClient, args],
  )

  const enabled = Boolean(publicClient && args && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return publicClient.getAbstractModuleVersion(args)
  }, [publicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
