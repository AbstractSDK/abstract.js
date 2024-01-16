import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from 'src/codegen/abstract/index'
import type { Prettify } from '../types/utils'
import { type Client, type ClientConfig, createClient } from './create-client'
import {
  type AccountPublicActions,
  accountPublicActions,
} from './decorators/account-public'

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
