import { PublicClient } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from 'src/contexts'

export function useCosmWasmClient(
  args: {
    /** Pass only if you are using cosmos-kit provider, graz doesn't need one. */
    chain: string | undefined
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    CosmWasmClient | undefined,
    unknown,
    CosmWasmClient | undefined,
    readonly ['cosm-wasm-client', PublicClient | undefined]
  > = {},
) {
  const config = useConfig()
  const publicClient = config.usePublicClient({ chainName: args?.chain })

  const queryKey = React.useMemo(
    () => ['cosm-wasm-client', publicClient] as const,
    [publicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!publicClient) throw new Error('client is not defined')

    return publicClient.getCosmWasmClient()
  }, [publicClient])

  const enabled = React.useMemo(
    () => Boolean(publicClient && enabled_),
    [enabled_, publicClient],
  )

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
