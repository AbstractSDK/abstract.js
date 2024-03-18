import { AccountPublicClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import React from 'react'
import { useConfig } from '../../../contexts'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../../types/queries'

type QueryFnData = Awaited<
  ReturnType<AccountPublicClient['getAccountBaseAddresses']>
>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'accountBaseAddresses',
  AccountPublicClient | undefined,
  AccountId | undefined,
]

type QueryOptions = Omit<
  UseQueryParameters<QueryFnData, QueryError, QueryData, QueryKey>,
  'queryFn'
>
type QueryResult = UseQueryReturnType<QueryData, QueryError>

export type UseAccountBaseAddressesFromApiParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  query?: QueryOptions
}

export function useAccountBaseAddressesFromApi({
  accountId,
  chainName,
  query = {},
}: UseAccountBaseAddressesFromApiParameters): QueryResult {
  const config = useConfig()
  const accountPublicClient = config.useAccountPublicClient({
    accountId,
    chainName,
  })
  const queryKey = React.useMemo(
    () => ['accountBaseAddresses', accountPublicClient, accountId] as const,
    [accountPublicClient, accountId],
  )

  const enabled = Boolean(accountPublicClient && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('No client')

    return accountPublicClient.getAccountBaseAddresses({})
  }, [accountPublicClient])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
