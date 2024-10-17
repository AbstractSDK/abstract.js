import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { Evaluate } from '../types/utils'
import { type Client, type ClientConfig, createClient } from './create-client'
import {
  AbstractBaseActions,
  abstractBaseActions,
} from './decorators/abstract-base'

export type AbstractBaseClientConfig = ClientConfig & {
  cosmWasmClient: CosmWasmClient
}

export type AbstractBaseClient = Evaluate<Client<AbstractBaseActions>>

export function createAbstractBaseClient(
  parameters: AbstractBaseClientConfig,
): AbstractBaseClient {
  const {
    key = 'abstract-base',
    name = 'Abstract Base Client',
    cosmWasmClient,
  } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend(() => abstractBaseActions(cosmWasmClient))
}
