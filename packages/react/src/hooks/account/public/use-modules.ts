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

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getModules']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'modules',
  AccountPublicClient | undefined,
  AccountId | undefined,
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseModulesParameters = WithArgs<
  Parameters<AccountPublicClient['getModules']>[0]
> & {
  accountId: AccountId | undefined
  chainName: string | undefined
  query?: QueryOptions
}

export function useModules({
  accountId,
  chainName,
  query = {},
  args = {},
}: UseModulesParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['modules', accountPublicClient, accountId] as const,
    [accountPublicClient, accountId],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')

    return accountPublicClient.getModules(args)
  }, [accountPublicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
