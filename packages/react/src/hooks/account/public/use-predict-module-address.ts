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
  ReturnType<AccountPublicClient['predictModuleAddress']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'predictModuleAddress',
  AccountPublicClient | undefined,
  UsePredictModuleAddressParameters['args'],
  (
    | Parameters<AccountPublicClient['predictModuleAddress']>[0]['extra']
    | undefined
  ),
]

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

export type UsePredictModuleAddressParameters<TData = QueryData> = WithArgs<
  Parameters<AccountPublicClient['predictModuleAddress']>[0]
> & {
  query?: QueryOptions<TData>
  chainName: string | undefined
  accountId: AccountId | undefined
}

export function usePredictModuleAddress<TData = QueryData>({
  args,
  accountId,
  chainName,
  extra,
  query = {},
}: UsePredictModuleAddressParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['predictModuleAddress', accountPublicClient, args, extra] as const,
    [accountPublicClient, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return accountPublicClient.predictModuleAddress({
        ...args,
        ...extra,
      })
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}

/**
 * @deprecated
 */
const useModuleInstantiate2AddressFromApi = usePredictModuleAddress
/**
 * @deprecated
 */
const useModuleInstantiate2Address = usePredictModuleAddress

export { useModuleInstantiate2AddressFromApi, useModuleInstantiate2Address }
