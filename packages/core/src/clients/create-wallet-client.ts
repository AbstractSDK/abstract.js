import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { Prettify } from '../types/utils'
import { type Client, type ClientConfig, createClient } from './create-client'
import { type WalletActions, walletActions } from './decorators/wallet'

export type WalletClientConfig = ClientConfig & {
  signingCosmWasmClient: SigningCosmWasmClient
}

export type WalletClient = Prettify<Client<WalletActions>>

export function createWalletClient(
  parameters: WalletClientConfig,
): WalletClient {
  const {
    key = 'wallet',
    name = 'Wallet Client',
    signingCosmWasmClient,
  } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend((client) => walletActions(client, signingCosmWasmClient))
}
