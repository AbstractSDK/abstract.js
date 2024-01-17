import { Prettify } from '../types/utils'
import { ABSTRACT_API_URL } from '../utils/constants'
import { baseActions } from './decorators/base'

export type ClientConfig = {
  apiUrl: string
  /** A key for the client. */
  key?: string | undefined
  /** A name for the client. */
  name?: string | undefined
}

export type Client_Base = {
  /** A key for the client. */
  key: string
  /** A name for the client. */
  name: string
  apiUrl: string
}

export type Client<
  extended extends Extended | undefined = Extended | undefined,
> = Client_Base &
  (extended extends Extended ? extended : unknown) & {
    extend: <const client extends Extended,>(
      fn: (client: Client<extended>) => client,
    ) => Client<
      Prettify<client> & (extended extends Extended ? extended : unknown)
    >
  }

type Extended = Prettify<
  // disallow redefining base properties
  { [_ in keyof Client_Base]?: undefined } & {
    [key: string]: unknown
  }
>

function createBaseClient(parameters: ClientConfig): Client {
  const {
    apiUrl = ABSTRACT_API_URL,
    key = 'base',
    name = 'Base Client',
  } = parameters

  const client = {
    apiUrl,
    key,
    name,
  }

  function extend(base: typeof client) {
    type ExtendFn = (base: typeof client) => unknown
    return (extendFn: ExtendFn) => {
      const extended = extendFn(base) as Extended
      for (const key in client) delete extended[key]
      const combined = { ...base, ...extended }
      return Object.assign(combined, { extend: extend(combined) })
    }
  }

  return Object.assign(client, { extend: extend(client) as any })
}

export function createClient(parameters: ClientConfig): Client {
  const client = createBaseClient(parameters)
  return client.extend(baseActions)
}
