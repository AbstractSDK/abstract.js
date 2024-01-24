import { AccountId, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { MaybeArray } from '../types/utils'

/**
 * Loads all accounts for a given owner and chain.
 * @param owner address of the owner. Will automatically translate to other chains' addresses.
 * @param chainName chain to load accounts for.
 */
export function useAccounts(
  {
    owner,
    chainName,
  }: {
    owner: string | undefined
    chainName: MaybeArray<string> | undefined
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
    () =>
      chainName
        ? Array.isArray(chainName)
          ? chainName
          : [chainName]
        : undefined,
    [chainName],
  )
  const config = useConfig()
  const client = config.useApiClient()
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
