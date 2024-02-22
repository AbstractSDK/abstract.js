import { PublicClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'

type QueryFnData = Awaited<ReturnType<PublicClient['getAbstractModuleVersion']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'abstractModuleVersion',
  PublicClient | undefined,
  string | undefined,
  UseAbstractModuleVersionArgs['args'],
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>

type UseAbstractModuleVersionArgs = Parameters<
  PublicClient['getAbstractModuleVersion']
>[0] & { chainName: string | undefined }
export function useAbstractModuleVersion(
  { args, chainName }: UseAbstractModuleVersionArgs,
  options: QueryOptions = { enabled: true },
) {
  const config = useConfig()
  const publicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['abstractModuleVersion', publicClient, chainName, args] as const,
    [publicClient, args],
  )

  const enabled = React.useMemo(
    () => Boolean(publicClient && args && options?.enabled),
    [options?.enabled, publicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return publicClient.getAbstractModuleVersion({
      args,
    })
  }, [publicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
