import { ApiClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import { UseQueryParameters, useQuery } from '../types/queries'
import { MaybeArray } from '../types/utils'

export type UseAccountsParameters = WithArgs<{
  owner: string
  chainName: MaybeArray<string>
}> & {
  query?: UseQueryParameters<
    AccountId[],
    unknown,
    AccountId[],
    readonly [
      'accountsOf',
      string | undefined,
      string[] | undefined,
      ApiClient | undefined,
    ]
  >
}

/**
 * Loads all accounts for a given owner and chain.
 * @param owner address of the owner. Will automatically translate to other chains' addresses.
 * @param chainName chain to load accounts for.
 */
export function useAccounts({ args, query = {} }: UseAccountsParameters) {
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

  const enabled = Boolean(
    client && chains && args?.owner && (query.enabled ?? true),
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args?.owner || !chains)
      throw new Error('No client or owner or chain')

    return client.getAccountsByOwnerFromApi({
      owner: args.owner,
      chains,
    })
  }, [client, args?.owner, chains])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
