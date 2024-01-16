import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from 'src/codegen/abstract/index.js'
import type { Prettify } from '../types/utils.js'
import {
  type Client,
  type ClientConfig,
  createClient,
} from './create-client.js'
import {
  type AccountPublicActions,
  accountPublicActions,
} from './decorators/account-public.js'

export type AccountPublicClientConfig = ClientConfig & {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
}

export type AccountPublicClient = Prettify<Client<AccountPublicActions>>

export function createAccountPublicClient(
  parameters: AccountPublicClientConfig,
): AccountPublicClient {
  const {
    key = 'public',
    name = 'AccountPublic Client',
    accountId,
    cosmWasmClient,
  } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend((client) =>
    accountPublicActions(accountId, cosmWasmClient, client),
  )
}
