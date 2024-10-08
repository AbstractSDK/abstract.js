import { RegistryTypes } from '../codegen/abstract/index'
import type { Evaluate } from '../types/utils'
import {
  ABSTRACT_API_URL,
  accountIdToString,
  registryAccountIdToString,
} from '../utils'
import { type Client } from './create-client'
import { PublicClientConfig, createPublicClient } from './create-public-client'
import {
  type AccountPublicActions,
  accountPublicActions,
} from './decorators/account-public'

export type AccountPublicClientConfig = PublicClientConfig & {
  accountId: RegistryTypes.AccountId
}

/**
 * A query client for querying a specific account in the Abstract infrastructure.
 */
export type AccountPublicClient = Evaluate<Client<AccountPublicActions>>

export function createAccountPublicClient(
  parameters: AccountPublicClientConfig,
): AccountPublicClient {
  const accountIdString = registryAccountIdToString(parameters.accountId)
  const {
    key = `account-public-${accountIdString}`,
    name = `AccountPublic Client (${accountIdString})`,
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
