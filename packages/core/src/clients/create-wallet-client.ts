import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { Evaluate } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils'
import { type Client } from './create-client'
import { PublicClientConfig, createPublicClient } from './create-public-client'
import { type WalletActions, walletActions } from './decorators/wallet'

export type WalletClientConfig = Omit<PublicClientConfig, 'cosmWasmClient'> & {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
}

export type WalletClient = Evaluate<Client<WalletActions>>

/**
 * Create a signing client to interact with the Abstract infrastructure.
 * @param parameters
 */
export function createWalletClient(
  parameters: WalletClientConfig,
): WalletClient {
  const {
    key = 'wallet',
    name = 'Wallet Client',
    signingCosmWasmClient,
    sender,
    apiUrl = ABSTRACT_API_URL,
  } = parameters
  const client = createPublicClient({
    ...parameters,
    cosmWasmClient: signingCosmWasmClient,
    key,
    name,
  })
  return client.extend(() =>
    walletActions(signingCosmWasmClient, sender, apiUrl),
  )
}
