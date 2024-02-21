import { AccountId, AccountPublicClient } from '@abstract-money/core'
import { MODULE_DELIMITER } from '@abstract-money/core/.tsup/declaration'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import { useAccountId, useConfig } from '../../../contexts'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getModuleInstantiate2AddressFromApi']>
>

type ModuleId = `${string}${typeof MODULE_DELIMITER}${string}`
type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'moduleInstantiate2AddressFromApi',
  AccountPublicClient | undefined,
  ModuleId,
  string | undefined,
]

type QueryOptions = Omit<
  UseQueryOptions<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryResult<QueryData, QueryError>

export function useModuleInstantiate2AddressFromApi(
  args: {
    accountId: AccountId | undefined
    moduleId: ModuleId
    version?: string
  },
  options?: QueryOptions,
) {
  const { accountId: accountIdParameter, moduleId, version } = args

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
        moduleId,
        version,
      ] as const,
    [accountPublicClient],
  )

  const enabled = React.useMemo(
    () => Boolean(accountPublicClient && options?.enabled),
    [options?.enabled, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')

    return accountPublicClient.getModuleInstantiate2AddressFromApi({
      args: {
        moduleId,
        version,
      },
    })
  }, [accountPublicClient])

  return useQuery(queryKey, queryFn, { ...options, enabled })
}
