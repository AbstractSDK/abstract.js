import { createAccountPublicClient } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useAccountId, useConfig } from '../contexts'

export function useAccountPublicClient({
  cosmWasmClient,
}: {
  cosmWasmClient: CosmWasmClient | undefined
}) {
  const { apiUrl } = useConfig()
  const { accountId } = useAccountId()

  return React.useMemo(() => {
    if (!cosmWasmClient) return undefined

    return createAccountPublicClient({
      apiUrl,
      cosmWasmClient,
      accountId,
    })
  }, [apiUrl, cosmWasmClient, accountId])
}
