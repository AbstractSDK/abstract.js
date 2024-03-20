import { QueryClientProviderProps } from '@tanstack/react-query/src/QueryClientProvider'
import * as React from 'react'
import { Config } from '../create-config'

const ConfigContext = React.createContext<Config | undefined>(undefined)

export type AbstractConfigProps = {
  config: Config
  queryClientOptions?: Partial<
    Omit<QueryClientProviderProps, 'children' | 'contextSharing'>
  >
}

export function AbstractConfigContext({
  children,
  config,
}: React.PropsWithChildren<AbstractConfigProps>) {
  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(ConfigContext.Provider, {
    children,
    value: config as unknown as Config,
  })
}

/**
 * Internal hook to retrieve the Abstract configuration from the {@link AbstractConfigContext} context.
 */
export function useConfig() {
  const config = React.useContext(ConfigContext)
  if (!config)
    throw new Error('`useConfig` must be used within `AbstractConfigContext`.')
  return config
}
