import { AccountPublicClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
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
  AccountId | undefined,
  UseSubAccountIdsFromApiParameters['args'],
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export function useSubAccountIdsFromApi({
  args,
  accountId,
  chainName,
  query = {},
}: UseSubAccountIdsFromApiParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () =>
      [
        'getSubAccountIdsFromApi',
        accountPublicClient,
        accountId,
        args,
      ] as const,
    [accountPublicClient, accountId, args],
  )

  const enabled = Boolean(
    accountPublicClient && args && (query.enabled ?? true),
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return accountPublicClient.getSubAccountIds(args)
  }, [accountPublicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
