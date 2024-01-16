import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { Prettify } from '../types/utils.js'
import { type Client, type ClientConfig, createClient } from './create-client'
import { type PublicActions, publicActions } from './decorators/public'

export type PublicClientConfig = ClientConfig & {
  cosmWasmClient: CosmWasmClient
}

export type PublicClient = Prettify<Client<PublicActions>>

export function createPublicClient(
  parameters: PublicClientConfig,
): PublicClient {
  const { key = 'public', name = 'Public Client', cosmWasmClient } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend((client) => publicActions(client, cosmWasmClient))
}
