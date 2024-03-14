import { VersionControlTypes } from '../codegen/abstract/index'
import type { Evaluate } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils'
import { type Client } from './create-client'
import { PublicClientConfig, createPublicClient } from './create-public-client'
import {
  type AccountPublicActions,
  accountPublicActions,
} from './decorators/account-public'

export type AccountPublicClientConfig = PublicClientConfig & {
  accountId: VersionControlTypes.AccountId
}

export type AccountPublicClient = Evaluate<Client<AccountPublicActions>>

export function createAccountPublicClient(
  parameters: AccountPublicClientConfig,
): AccountPublicClient {
  const {
    key = 'account-public',
    name = 'AccountPublic Client',
    accountId,
    cosmWasmClient,
    apiUrl = ABSTRACT_API_URL,
  } = parameters
  const client = createPublicClient({
    ...parameters,
    key,
    name,
  })
  return client.extend(() =>
    accountPublicActions(accountId, cosmWasmClient, apiUrl),
  )
}
