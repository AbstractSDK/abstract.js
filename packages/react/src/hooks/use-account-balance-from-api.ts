import { ApiClient } from '@abstract-money/core/clients'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import { UseQueryParameters, useQuery } from '../types/queries'

export type UseAccountBalancesFromApiParameters = WithArgs<
  Parameters<ApiClient['getAccountBalancesFromApi']>[0]
> & {
  query?: UseQueryParameters<
    Awaited<ReturnType<ApiClient['getAccountBalancesFromApi']>>,
    unknown,
    Awaited<ReturnType<ApiClient['getAccountBalancesFromApi']>>,
    readonly [
      'accountBalancesFromApi',
      WithArgs<Parameters<ApiClient['getAccountBalancesFromApi']>[0]>,
      ApiClient | undefined,
    ]
  >
}

export function useAccountBalancesFromApi({
  args,
  query = {},
}: UseAccountBalancesFromApiParameters) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['accountBalancesFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = Boolean(client && args?.accountId && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!client || !args?.accountId) throw new Error('No client or accountid')

    return client.getAccountBalancesFromApi({
      accountId: args.accountId,
    })
  }, [client, args])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
