import { WalletClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from 'src/contexts'

export function useSenderAddress(
  /** Pass only if you are using cosmos-kit provider, graz doesn't need one */
  args?: {
    /** Pass only if you are using cosmos-kit provider, graz doesn't need one. */
    chain: string | undefined
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    string | undefined,
    unknown,
    string | undefined,
    readonly ['signing-cosm-wasm-client', WalletClient | undefined]
  > = {},
) {
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName: args?.chain })

  const queryKey = React.useMemo(
    () => ['signing-cosm-wasm-client', walletClient] as const,
    [walletClient],
  )

  const queryFn = React.useCallback(() => {
    if (!walletClient) throw new Error('client is not defined')

    return walletClient.getSenderAddress()
  }, [walletClient])

  const enabled = React.useMemo(
    () => Boolean(walletClient && enabled_),
    [enabled_, walletClient],
  )

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
