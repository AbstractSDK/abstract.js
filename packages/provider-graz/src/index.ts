import { Provider } from '@abstract-money/react'
import { useAccount, useCosmWasmClient, useCosmWasmSigningClient } from 'graz'

export const grazProvider = {
  useCosmWasmClient: () => useCosmWasmClient().data,
  useSigningCosmWasmClient: () => useCosmWasmSigningClient().data,
  useSenderAddress: () => useAccount().data?.bech32Address,
} satisfies Provider
