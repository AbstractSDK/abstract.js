import type { Evaluate } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils'
import {
  AbstractBaseClientConfig,
  createAbstractBaseClient,
} from './create-abstract-base-client'
import { ApiClientConfig } from './create-api-client'
import { type Client } from './create-client'
import { AbstractBaseActions } from './decorators/abstract-base'
import { apiActions } from './decorators/api'
import { type PublicActions, publicActions } from './decorators/public'

export type PublicClientConfig = AbstractBaseClientConfig & ApiClientConfig

/**
 * A public client for querying the Abstract infrastructure via contract & API.
 */
export type PublicClient = Evaluate<Client<AbstractBaseActions & PublicActions>>

/**
 * Create a public client to query the Abstract infrastructure.
 * Public -> AbstractBase & Api
 * @param parameters
 */
export function createPublicClient(
  parameters: PublicClientConfig,
): PublicClient {
  const {
    key = 'public',
    name = 'Public Client',
    cosmWasmClient,
    apiUrl = ABSTRACT_API_URL,
  } = parameters
  const baseClient = createAbstractBaseClient({
    ...parameters,
    key,
    name,
  })

  // Note: this in theory should call createApiClient, but instead we extend the actions manually

  return baseClient
    .extend(() => apiActions(apiUrl))
    .extend(() => publicActions(cosmWasmClient, apiUrl))
}
