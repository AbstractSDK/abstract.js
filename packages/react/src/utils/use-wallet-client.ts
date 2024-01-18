import { createWalletClient } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useConfig } from 'src/contexts'

export function useWalletClient({
  signingCosmWasmClient,
  sender,
}: {
  signingCosmWasmClient: SigningCosmWasmClient | undefined
  sender: string | undefined
}) {
  const { apiUrl } = useConfig()

  return React.useMemo(() => {
    if (!signingCosmWasmClient) return undefined
    if (!sender) return undefined

    return createWalletClient({
      apiUrl,
      signingCosmWasmClient,
      sender,
    })
  }, [signingCosmWasmClient, sender, apiUrl])
}
