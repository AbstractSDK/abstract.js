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
  ReturnType<AccountPublicClient['getAccountSettings']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountSettings',
  AccountPublicClient | undefined,
  (
    | NonNullable<
        Parameters<AccountPublicClient['getAccountSettings']>[0]
      >['extra']
    | undefined
  ),
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseAccountSettingsParameters = WithArgs<
  Parameters<AccountPublicClient['getAccountSettings']>[0]
> & {
  accountId: AccountId | undefined
  chainName: string | undefined
  query?: QueryOptions
}

export function useAccountSettings({
  accountId,
  extra,
  chainName,
  query = {},
}: UseAccountSettingsParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountSettings', accountPublicClient, extra] as const,
    [accountPublicClient, extra],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, accountPublicClient, extra] }) => {
      if (!accountPublicClient) throw new Error('No client')

      return accountPublicClient.getAccountSettings(
        extra ? { extra } : undefined,
      )
    },
    [],
  )

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
