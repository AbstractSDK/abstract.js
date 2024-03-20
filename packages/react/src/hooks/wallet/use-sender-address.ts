import { WalletClient } from '@abstract-money/core'
import React from 'react'
import { useConfig } from '../../contexts'
import { UseQueryParameters, useQuery } from '../../types/queries'

export type UseSenderAddressParameters =
  | {
      chainName?: string | undefined
      query?: UseQueryParameters<
        string | undefined,
        unknown,
        string | undefined,
        readonly ['sender-address', WalletClient | undefined]
      >
    }
  | never

export function useSenderAddress(parameters: UseSenderAddressParameters) {
  const { query = {}, chainName } = parameters ?? {}
  const config = useConfig()
  const walletClient = config.useWalletClient({ chainName })

  const queryKey = React.useMemo(
    () => ['sender-address', walletClient] as const,
    [walletClient],
  )

  const queryFn = React.useCallback(() => {
    if (!walletClient) throw new Error('client is not defined')

    return walletClient.getSenderAddress()
  }, [walletClient])

  const enabled = Boolean(walletClient && (query.enabled ?? true))

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
