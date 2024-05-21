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

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getSubAccountIds']>>

type QueryError = unknown
type QueryData = QueryFnData
export type UseSubAccountIdsFromApiParameters = WithArgs<
  Parameters<AccountPublicClient['getSubAccountIds']>[0]
> & {
  query?: QueryOptions
  chainName: string | undefined
  accountId: AccountId | undefined
}
type QueryKey = readonly [
  'getSubAccountIdsFromApi',
  AccountPublicClient | undefined,
  NonNullable<Parameters<AccountPublicClient['getSubAccountIds']>[0]>['extra'],
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export function useSubAccountIdsFromApi({
  accountId,
  chainName,
  extra,
  query = {},
}: UseSubAccountIdsFromApiParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['getSubAccountIdsFromApi', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getSubAccountIds(extra ? { extra } : undefined)
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
