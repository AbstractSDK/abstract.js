import { ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/utils'

export function useAccountBalancesFromAPI(
  {
    args,
  }: WithArgs<Parameters<ApiClient['getAccountBalancesFromApi']>[0]['args']>,
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    Awaited<ReturnType<ApiClient['getAccountBalancesFromApi']>> | undefined,
    unknown,
    Awaited<ReturnType<ApiClient['getAccountBalancesFromApi']>> | undefined,
    readonly [
      'accountBalancesFromApi',
      WithArgs<Parameters<ApiClient['getAccountBalancesFromApi']>[0]['args']>,
      ApiClient | undefined,
    ]
  > = {},
) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['accountBalancesFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = React.useMemo(
    () => Boolean(client && args?.accountId && enabled_),
    [enabled_, client, args],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args?.accountId) throw new Error('No client or accountid')

    return client.getAccountBalancesFromApi({
      args: { accountId: args.accountId },
    })
  }, [client, args])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
