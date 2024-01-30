import { AnsToken, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/utils'

export function useAnsTokenFromAPI(
  { args }: WithArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]['args']>,
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AnsToken | undefined,
    unknown,
    AnsToken | undefined,
    readonly [
      'ansTokenFromApi',
      WithArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]['args']>,
      ApiClient | undefined,
    ]
  > = {},
) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['ansTokenFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = React.useMemo(
    () => Boolean(client && args?.id && args?.chainName && enabled_),
    [enabled_, client, args],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args?.chainName || !args?.id)
      throw new Error('No client or owner or chain')

    return client.getAnsTokenFromApi({
      args: { chainName: args.chainName, id: args.id },
    })
  }, [client, args])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
