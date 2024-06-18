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
  ReturnType<AccountPublicClient['getModuleInstantiate2Address']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'moduleInstantiate2Address',
  AccountPublicClient | undefined,
  UseModuleInstantiate2AddressParameters['args'],
  (
    | Parameters<
        AccountPublicClient['getModuleInstantiate2Address']
      >[0]['extra']
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

export type UseModuleInstantiate2AddressParameters<TData = QueryData> =
  WithArgs<
    Parameters<AccountPublicClient['getModuleInstantiate2Address']>[0]
  > & {
    query?: QueryOptions<TData>
    chainName: string | undefined
    accountId: AccountId | undefined
  }

export function useModuleInstantiate2Address<TData = QueryData>({
  args,
  accountId,
  chainName,
  extra,
  query = {},
}: UseModuleInstantiate2AddressParameters<TData>): QueryResult<TData> {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      ['moduleInstantiate2Address', accountPublicClient, args, extra] as const,
    [accountPublicClient, args, extra],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, args, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')
      if (!args) throw new Error('No args')

      return accountPublicClient.getModuleInstantiate2Address({
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
const useModuleInstantiate2AddressFromApi = useModuleInstantiate2Address
export { useModuleInstantiate2AddressFromApi }
