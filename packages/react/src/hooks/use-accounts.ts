import { AccountId, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'

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
    chain: string | undefined
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
      string | undefined,
      ApiClient | undefined,
    ]
  > = {},
) {
  const queryKey = React.useMemo(
    () => ['accountsOf', owner, chain, client] as const,
    [owner, chain, client],
  )

  const enabled = React.useMemo(
    () => Boolean(client && chain && owner && enabled_),
    [enabled_, client, owner, chain],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !owner || !chain)
      throw new Error('No client or owner or chain')

    return client.getAccountsByOwnerFromApi({
      args: { owner, chains: [chain] },
    })
  }, [client, owner, chain])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
