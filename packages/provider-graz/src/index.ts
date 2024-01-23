import { GrazProvider } from '@abstract-money/react'
import { useCosmWasmClient, useCosmWasmSigningClient, useAccount } from 'graz'

export const grazProvider = {
  name: 'graz',
  useCosmWasmClient: () => useCosmWasmClient().data,
  useSigningCosmWasmClient: () => useCosmWasmSigningClient().data,
  useSenderAddress: () => useAccount().data?.bech32Address,
} satisfies GrazProvider
