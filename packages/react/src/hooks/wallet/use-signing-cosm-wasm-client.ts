import { WalletClient } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useConfig } from '../../contexts'
import { UseQueryParameters, useQuery } from '../../types/queries'

export type UseSigningCosmWasmClientParameters =
  | {
      chainName?: string | undefined
      query?: UseQueryParameters<
        SigningCosmWasmClient | undefined,
        unknown,
        SigningCosmWasmClient | undefined,
        readonly ['signing-cosm-wasm-client', WalletClient | undefined]
      >
    }
  | never

export function useSigningCosmWasmClient(
  /** Pass only if you are using cosmos-kit provider, graz doesn't need one */
  parameters: UseSigningCosmWasmClientParameters,
) {
  const { chainName, query = {} } = parameters ?? {}
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName })

  const queryKey = React.useMemo(
    () => ['signing-cosm-wasm-client', walletClient] as const,
    [walletClient],
  )

  const queryFn = React.useCallback(() => {
    if (!walletClient) throw new Error('client is not defined')

    return walletClient.getSigningCosmWasmClient()
  }, [walletClient])

  const enabled = Boolean(walletClient && (query.enabled ?? true))

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
