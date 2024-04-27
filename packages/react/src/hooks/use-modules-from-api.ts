import { ApiClient } from '@abstract-money/core/clients'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import { UseQueryParameters, useQuery } from '../types/queries'

export type UseModulesFromApiParameters = WithArgs<
  Parameters<ApiClient['getModulesFromApi']>[0]
> & {
  query?: UseQueryParameters<
    Awaited<ReturnType<ApiClient['getModulesFromApi']>>,
    unknown,
    Awaited<ReturnType<ApiClient['getModulesFromApi']>>,
    readonly [
      'modulesFromApi',
      WithArgs<Parameters<ApiClient['getModulesFromApi']>[0]>,
      ApiClient | undefined,
    ]
  >
}

export function useModulesFromApi({
  args,
  query = {},
}: UseModulesFromApiParameters) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['modulesFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = Boolean(client && args?.chainName && (query.enabled ?? true))

  const queryFn = React.useCallback(() => {
    if (!client || !args?.chainName)
      throw new Error('No client or owner or chain')

    return client.getModulesFromApi({
      chainName: args.chainName,
    })
  }, [client, args])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
