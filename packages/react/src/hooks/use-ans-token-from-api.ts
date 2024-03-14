import { ApiClient } from '@abstract-money/core/clients'
import { AnsToken } from '@abstract-money/core/utils'
import React from 'react'
import { useConfig } from '../contexts'
import { WithArgs } from '../types/args'
import { UseQueryParameters, useQuery } from '../types/queries'

export type UseAnsTokenFromAPIParameters = WithArgs<
  Parameters<ApiClient['getAnsTokenFromApi']>[0]
> & {
  query?: UseQueryParameters<
    AnsToken,
    unknown,
    AnsToken,
    readonly [
      'ansTokenFromApi',
      WithArgs<Parameters<ApiClient['getAnsTokenFromApi']>[0]>,
      ApiClient | undefined,
    ]
  >
}

export function useAnsTokenFromAPI({
  args,
  query = {},
}: UseAnsTokenFromAPIParameters) {
  const config = useConfig()
  const client = config.useApiClient()
  const queryKey = React.useMemo(
    () => ['ansTokenFromApi', { args }, client] as const,
    [args, client],
  )

  const enabled = Boolean(
    client && args?.id && args?.chainName && (query.enabled ?? true),
  )

  const queryFn = React.useCallback(() => {
    if (!client || !args?.chainName || !args?.id)
      throw new Error('No client or owner or chain')

    return client.getAnsTokenFromApi({
      chainName: args.chainName,
      id: args.id,
    })
  }, [client, args])

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
