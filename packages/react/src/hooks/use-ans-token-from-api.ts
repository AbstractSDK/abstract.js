import { AnsToken, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { PartialArgs } from '../types/utils'

export function useAnsTokenFromAPI(
  { args }: PartialArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]>,
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AnsToken | undefined,
    unknown,
    AnsToken | undefined,
    readonly [
      'ansTokenFromApi',
      PartialArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]>,
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
    () => Boolean(client && args.id && args.chainId && enabled_),
    [enabled_, client, args],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args.chainId || !args.id)
      throw new Error('No client or owner or chain')

    return client.getAnsTokenFromApi({
      args: { chainId: args.chainId, id: args.id },
    })
  }, [client, args])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
