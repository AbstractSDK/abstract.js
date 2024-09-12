import { QueryClientProviderProps } from '@tanstack/react-query/src/QueryClientProvider'
import * as React from 'react'
import { Config, Provider, createConfig } from '../create-config'

type ConfigContextType = {
  config: Config
  dispatch: React.Dispatch<ConfigAction>
}

const ConfigContext = React.createContext<ConfigContextType | undefined>(
  undefined,
)

type SelectProviderArgs = { providerName: keyof Config['providers'] }

type ConfigAction = { type: 'SELECT_PROVIDER'; args: SelectProviderArgs }

function configReducer(state: Config, action: ConfigAction): Config {
  switch (action.type) {
    case 'SELECT_PROVIDER':
      if (!state.providers || !state.providers[action.args.providerName]) {
        console.error(
          `Provider "${action.args.providerName}" not found in config.`,
        )
        return state
      }

      return createConfig({
        ...state,
        provider: state.providers[action.args.providerName] as Provider,
      })
    default:
      return state
  }
}

export type AbstractConfigProps = {
  config: Config
  queryClientOptions?: Partial<
    Omit<QueryClientProviderProps, 'children' | 'contextSharing'>
  >
}

export function AbstractConfigContext({
  children,
  config: initialConfig,
}: React.PropsWithChildren<AbstractConfigProps>) {
  const [config, dispatch] = React.useReducer(configReducer, initialConfig)

  const value = React.useMemo(() => ({ config, dispatch }), [config])

  return React.createElement(ConfigContext.Provider, { value }, children)
}

/**
 * Internal hook to retrieve the Abstract configuration from the {@link AbstractConfigContext} context.
 */
export function useConfig() {
  const context = React.useContext(ConfigContext)
  if (!context) {
    throw new Error('`useConfig` must be used within `AbstractConfigContext`.')
  }
  return context.config
}

export function useSelectProvider() {
  const context = React.useContext(ConfigContext)
  if (!context) {
    throw new Error(
      '`useSelectProvider` must be used within `AbstractConfigContext`.',
    )
  }
  const { dispatch } = context

  return React.useCallback(
    (args: SelectProviderArgs) => {
      dispatch({ type: 'SELECT_PROVIDER', args })
    },
    [dispatch],
  )
}
