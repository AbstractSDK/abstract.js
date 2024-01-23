import { AccountId, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { PartialArgs } from '../types/utils'

export function useAnsTokenFromAPI(
  { args }: PartialArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]>,
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AccountId[] | undefined,
    unknown,
    AccountId[] | undefined,
    readonly [
      'accountsOf',
      string | undefined,
      string[] | undefined,
      ApiClient | undefined,
    ]
  > = {},
) {
  const queryKey = React.useMemo(
    () => ['accountsOf', owner, chains, client] as const,
    [owner, chains, client],
  )

  const enabled = React.useMemo(
    () => Boolean(client && chains && owner && enabled_),
    [enabled_, client, owner, chains],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !owner || !chains)
      throw new Error('No client or owner or chain')

    return client.getAccountsByOwnerFromApi({
      args: { owner, chains },
    })
  }, [client, owner, chains])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
