import * as React from 'react'
import { AbstractConfigContext, AbstractConfigProps } from './config'

export type AbstractProviderProps = AbstractConfigProps

/**
 * Provide abstract configuration for the application.
 * @param config configuration.
 */
export function AbstractProvider({
  children,
  config,
}: React.PropsWithChildren<AbstractProviderProps>) {
  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(React.Fragment, {
    // biome-ignore lint/correctness/noChildrenProp: <explanation>
    children: React.createElement(AbstractConfigContext, {
      config,
      children,
    }),
  })
}
