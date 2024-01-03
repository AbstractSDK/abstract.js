import { AbstractAccountId, AbstractQueryClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'

export function useAccounts(
  {
    owner,
    chain,
    client,
  }: {
    owner: string | undefined
    chain: string | undefined
    client: AbstractQueryClient | undefined
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    AbstractAccountId[] | undefined,
    unknown,
    AbstractAccountId[] | undefined,
    readonly [
      'accountsOf',
      string | undefined,
      string | undefined,
      AbstractQueryClient | undefined,
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

    return client.getAccountsOfOwner(owner, [chain])
  }, [client, owner, chain])

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
