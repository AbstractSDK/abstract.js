import { createPublicClient } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'
import { useConfig } from 'src/contexts'

export function usePublicClient({
  cosmWasmClient,
}: {
  cosmWasmClient: CosmWasmClient | undefined
}) {
  const { apiUrl } = useConfig()

  return React.useMemo(() => {
    if (!cosmWasmClient) return undefined
    return createPublicClient({
      apiUrl,
      cosmWasmClient,
    })
  }, [apiUrl, cosmWasmClient])
}
