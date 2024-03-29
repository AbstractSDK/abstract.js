import { ApiClient } from '@abstract-money/core/clients'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import { UseQueryParameters, useQuery } from '../types/queries'

export type UseSubAccountIdsByModuleIdFromApiParameters = WithArgs<
  Parameters<ApiClient['getSubAccountIdsByModuleIdFromApi']>[0]
> & {
  query?: UseQueryParameters<
    Awaited<ReturnType<ApiClient['getSubAccountIdsByModuleIdFromApi']>>,
    unknown,
    Awaited<ReturnType<ApiClient['getSubAccountIdsByModuleIdFromApi']>>,
    readonly [
      'subAccountIdsByModuleIdFromApi',
      WithArgs<Parameters<ApiClient['getSubAccountIdsByModuleIdFromApi']>[0]>,
      ApiClient | undefined,
    ]
  >
}

export function useSubAccountIdsByModuleIdFromApi({
  args,
  query = {},
}: UseSubAccountIdsByModuleIdFromApiParameters) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['subAccountIdsByModuleIdFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = Boolean(client && args && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!client || !args?.accountId) throw new Error('No client or accountid')

    return client.getSubAccountIdsByModuleIdFromApi({
      accountId: args.accountId,
      moduleId: args.moduleId,
    })
  }, [client, args])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
