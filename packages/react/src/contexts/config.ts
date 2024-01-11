import { ABSTRACT_API_URL } from '@abstract-money/core'
import * as React from 'react'

type Config = {
  apiUrl: string
}

const ConfigContext = React.createContext<Config | undefined>(undefined)

export type AbstractConfigProps = {
  config?: Config
}

export function AbstractConfigContext({
  children,
  config = { apiUrl: ABSTRACT_API_URL },
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
