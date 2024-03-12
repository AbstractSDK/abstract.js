import { AccountId, ApiClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../contexts'
import { MaybeArray, WithArgs } from '../types/utils'

/**
 * Loads all accounts for a given owner and chain.
 * @param owner address of the owner. Will automatically translate to other chains' addresses.
 * @param chainName chain to load accounts for.
 */
export function useAccounts(
  {
    args,
  }: WithArgs<{
    owner: string
    chainName: MaybeArray<string>
  }>,
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AccountId[],
    unknown,
    AccountId[],
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
      args?.chainName
        ? Array.isArray(args?.chainName)
          ? args?.chainName
          : [args?.chainName]
        : undefined,
    [args?.chainName],
  )
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['accountsOf', args?.owner, chains, client] as const,
    [args?.owner, chains, client],
  )

  const enabled = React.useMemo(
    () => Boolean(client && chains && args?.owner && enabled_),
    [enabled_, client, args?.owner, chains],
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args?.owner || !chains)
      throw new Error('No client or owner or chain')

    return client.getAccountsByOwnerFromApi({
      args: { owner: args.owner, chains },
    })
  }, [client, args?.owner, chains])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
