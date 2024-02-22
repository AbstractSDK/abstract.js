import { AccountId, AccountPublicClient } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from '../../../contexts'
import { parseParametersWithArgs } from '../utils'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getModuleInstantiate2AddressFromApi']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'moduleInstantiate2AddressFromApi',
  AccountPublicClient | undefined,
  AccountId | undefined,
  UseModuleInstantiate2AddressFromApiArgs['args'],
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

type UseModuleInstantiate2AddressFromApiArgs = Parameters<
  AccountPublicClient['getModuleInstantiate2AddressFromApi']
>[0]
export function useModuleInstantiate2AddressFromApi(
  parameters: UseModuleInstantiate2AddressFromApiArgs & {
    accountId: AccountId | undefined
  },
  options?: QueryOptions,
): QueryResult
export function useModuleInstantiate2AddressFromApi(
  parameters: UseModuleInstantiate2AddressFromApiArgs,
  options?: QueryOptions,
): QueryResult
export function useModuleInstantiate2AddressFromApi(
  arg1: UseModuleInstantiate2AddressFromApiArgs &
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
        'moduleInstantiate2AddressFromApi',
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

    return accountPublicClient.getModuleInstantiate2AddressFromApi({
      args,
    })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
