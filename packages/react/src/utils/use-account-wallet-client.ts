import { createAccountWalletClient } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useAccountId, useConfig } from '../contexts'

export function useAccountWalletClient({
  signingCosmWasmClient,
  sender,
}: {
  signingCosmWasmClient: SigningCosmWasmClient | undefined
  sender: string | undefined
}) {
  const { apiUrl } = useConfig()
  const { accountId } = useAccountId()

  return React.useMemo(() => {
    if (!signingCosmWasmClient) return undefined
    if (!sender) return undefined
    return createAccountWalletClient({
      apiUrl,
      signingCosmWasmClient,
      sender,
      accountId,
    })
  }, [accountId, signingCosmWasmClient, sender, apiUrl])
}
