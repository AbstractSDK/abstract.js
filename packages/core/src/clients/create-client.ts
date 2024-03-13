import { Evaluate } from '../types/utils'

export type ClientConfig = {
  /** A key for the client. */
  key?: string | undefined
  /** A name for the client. */
  name?: string | undefined
}

export type BaseClient = {
  /** A key for the client. */
  key: string
  /** A name for the client. */
  name: string
}

export type Client<
  extended extends Extended | undefined = Extended | undefined,
> = BaseClient &
  (extended extends Extended ? extended : unknown) & {
    extend: <const client extends Extended,>(
      fn: (client: Client<extended>) => client,
    ) => Client<
      Evaluate<client> & (extended extends Extended ? extended : unknown)
    >
  }

export type Extended<TClient extends BaseClient = BaseClient> = Evaluate<
  // disallow redefining base properties
  { [_ in keyof TClient]?: undefined } & {
    [key: string]: unknown
  }
>

function createBaseClient(parameters: ClientConfig): Client {
  const { key = 'base', name = 'Base Client' } = parameters

  const client = {
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
  return client
}
