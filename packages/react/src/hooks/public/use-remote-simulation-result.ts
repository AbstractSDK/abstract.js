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
  ReturnType<PublicClient['getRemoteSimulationResult']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'remoteSimulationResult',
  MaybeChainName,
  PublicClient | undefined,
  WithArgs<Parameters<PublicClient['getRemoteSimulationResult']>[0]>['args'],
  Parameters<PublicClient['getRemoteSimulationResult']>[0]['extra'],
]

type QueryOptions<TData = QueryData> = Omit<
  UseQueryParameters<QueryFnData, QueryError, TData, QueryKey>,
  'queryFn'
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseRemoteSimulationResultParameters = WithArgs<
  Parameters<PublicClient['getRemoteSimulationResult']>[0]
> & {
  chainName?: string | undefined
  query?: QueryOptions
}

export function useRemoteSimulationResult({
  chainName,
  args,
  extra,
  query = {},
}: UseRemoteSimulationResultParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.usePublicClient({
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'remoteSimulationResult',
        chainName,
        accountPublicClient,
        args,
        extra,
      ] as const,
    [accountPublicClient, chainName, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, _chainName, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient || !args) throw new Error('No client or args')

      return accountPublicClient.getRemoteSimulationResult({ extra, ...args })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
