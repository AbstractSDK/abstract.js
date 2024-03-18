import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { AbstractConfigContext, AbstractConfigProps } from './config'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1_000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
})

export type AbstractProviderProps = AbstractConfigProps

/**
 * Provide abstract configuration for the application.
 * @param config configuration.
 */
export function AbstractProvider({
  children,
  config,
  queryClientOptions,
}: React.PropsWithChildren<AbstractProviderProps>) {
  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(React.Fragment, {
    // biome-ignore lint/correctness/noChildrenProp: <explanation>
    children: React.createElement(AbstractConfigContext, {
      config,
      // biome-ignore lint/correctness/noChildrenProp: <explanation>
      children: React.createElement(QueryClientProvider, {
        children,
        client: client,
        ...queryClientOptions,
      }),
    }),
  })
}
