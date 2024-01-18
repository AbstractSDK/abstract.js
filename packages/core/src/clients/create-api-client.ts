import type { Prettify } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils/constants'
import { type Client, type ClientConfig, createClient } from './create-client'
import { type ApiActions, apiActions } from './decorators/api'

export type ApiClientConfig = ClientConfig & {
  apiUrl?: string
}

export type ApiClient = Prettify<Client<ApiActions>>

export function createApiClient(parameters: ApiClientConfig): ApiClient {
  const {
    apiUrl = ABSTRACT_API_URL,
    key = 'api',
    name = 'Api Client',
  } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
  })
  return client.extend(() => apiActions(apiUrl))
}
