import { AccountId, AccountPublicClient } from '@abstract-money/core'
import { MODULE_DELIMITER } from '@abstract-money/core'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from '../../contexts'
import { WithArgs } from '../../types/utils'
import { parseParametersWithArgs } from '../account/utils'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getAbstractModuleVersionFromApi']>
>

type ModuleId = `${string}${typeof MODULE_DELIMITER}${string}`
type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'moduleInstantiate2AddressFromApi',
  AccountPublicClient | undefined,
  AccountId | undefined,
  UseAbstractModuleVersionFromApiArgs['args'],
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

type UseAbstractModuleVersionFromApiArgs = WithArgs<{
  version?: string
  moduleId: ModuleId
}>

export function useAbstractModuleVersionFromApi(
  parameters: UseAbstractModuleVersionFromApiArgs & {
    accountId: AccountId | undefined
  },
  options?: QueryOptions,
): QueryResult
export function useAbstractModuleVersionFromApi(
  parameters: UseAbstractModuleVersionFromApiArgs,
  options?: QueryOptions,
): QueryResult
export function useAbstractModuleVersionFromApi(
  arg1: UseAbstractModuleVersionFromApiArgs &
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

    return accountPublicClient.getAbstractModuleVersionFromApi({
      args,
    })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
