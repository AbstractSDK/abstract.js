import { AccountId, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { MaybeArray } from '../types/utils'

/**
 * Loads all accounts for a given owner and chain.
 * @param owner address of the owner. Will automatically translate to other chains' addresses.
 * @param chain chain to load accounts for.
 * @param client
 */
export function useAccounts(
  {
    owner,
    chain,
    client,
  }: {
    owner: string | undefined
    chain: MaybeArray<string> | undefined
    client: ApiClient | undefined
  },
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
  const chains = React.useMemo(
    () => (chain ? (Array.isArray(chain) ? chain : [chain]) : undefined),
    [chain],
  )
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
