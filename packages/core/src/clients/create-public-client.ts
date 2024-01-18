import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { Prettify } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils'
import { ApiClientConfig, createApiClient } from './create-api-client'
import { type Client } from './create-client'
import { type PublicActions, publicActions } from './decorators/public'

export type PublicClientConfig = ApiClientConfig & {
  cosmWasmClient: CosmWasmClient
}

export type PublicClient = Prettify<Client<PublicActions>>

export function createPublicClient(
  parameters: PublicClientConfig,
): PublicClient {
  const {
    key = 'public',
    name = 'Public Client',
    cosmWasmClient,
    apiUrl = ABSTRACT_API_URL,
  } = parameters
  const client = createApiClient({
    ...parameters,
    key,
    name,
  })
  return client.extend(() => publicActions(cosmWasmClient, apiUrl))
}
