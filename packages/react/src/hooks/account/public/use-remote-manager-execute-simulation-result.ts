import { AccountPublicClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../../contexts'
import { WithArgs } from '../../../types/args'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../../types/queries'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getRemoteManagerExecuteSimulationResult']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'remoteManagerExecuteSimulationResult',
  AccountPublicClient | undefined,
  UseRemoteManagerExecuteSimulationResultParameters['args'],
  Parameters<
    AccountPublicClient['getRemoteManagerExecuteSimulationResult']
  >[0]['extra'],
]

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UseRemoteManagerExecuteSimulationResultParameters<
  TData = QueryData,
> = WithArgs<
  Parameters<AccountPublicClient['getRemoteManagerExecuteSimulationResult']>[0]
> & {
  query?: QueryOptions<TData>
  chainName: string | undefined
  accountId: AccountId | undefined
}

export function useRemoteManagerExecuteSimulationResult<TData = QueryData>({
  args,
  accountId,
  chainName,
  extra,
  query = {},
}: UseRemoteManagerExecuteSimulationResultParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'remoteManagerExecuteSimulationResult',
        accountPublicClient,
        args,
        extra,
      ] as const,
    [accountPublicClient, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return accountPublicClient.getRemoteManagerExecuteSimulationResult({
        ...args,
        ...extra,
      })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
