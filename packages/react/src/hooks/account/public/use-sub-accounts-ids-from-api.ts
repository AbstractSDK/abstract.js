import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParametersWithArgs } from '../utils'

type QueryFnData = Awaited<ReturnType<AccountPublicClient['getSubAccountIds']>>

type QueryError = unknown
type QueryData = QueryFnData
type UseSubAccountIdsFromApiArgs = Parameters<
  AccountPublicClient['getSubAccountIds']
>[0]
type QueryKey = readonly [
  'getSubAccountIdsFromApi',
  AccountPublicClient | undefined,
  AccountId | undefined,
  UseSubAccountIdsFromApiArgs['args'],
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export function useSubAccountIdsFromApi(
  parameters: UseSubAccountIdsFromApiArgs & {
    accountId: AccountId | undefined
  },
  options?: QueryOptions,
): QueryResult
export function useSubAccountIdsFromApi(
  parameters: UseSubAccountIdsFromApiArgs,
  options?: QueryOptions,
): QueryResult
export function useSubAccountIdsFromApi(
  arg1: UseSubAccountIdsFromApiArgs &
    (
      | {
          accountId: AccountId | undefined
        }
      | {}
    ),
  arg2: QueryOptions = { enabled: true },
) {
  const {
    args,
    accountId: accountIdParameter,
    options,
  } = parseParametersWithArgs(arg1, arg2)

  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName: accountId?.chainName,
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

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && args && options.enabled),
    [options.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')
    if (!args) throw new Error('No args')

    return accountPublicClient.getSubAccountIds({
      args,
    })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
