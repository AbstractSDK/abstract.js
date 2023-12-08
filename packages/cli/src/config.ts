import { react } from './plugins'
import type { MaybeArray, MaybePromise } from './types'

export type ContractConfig = {
  /**
   * Name of the contract.
   */
  name: string
  /**
   * Path to the contract schema directory.
   */
  path: string
}

export type Contract = ContractConfig & {
  /** Generated string content */
  content: string
  /** Meta info about contract */
  // meta: {
  //   abiName: string
  //   // addressName?: string
  //   // configName?: string
  // }
}

export type Plugin = {
  /** Contracts provided by plugin */
  contracts?(): MaybePromise<ContractConfig[]>
  /** Plugin name */
  name: string
  /** Run plugin logic */
  run?(config: {
    /** All resolved contracts from config and plugins */
    contracts: Contract[]
    /** Out path */
    out: string
    /** Whether TypeScript is detected in project */
    isTypeScript: boolean
    /** Previous plugin outputs */
    outputs: readonly {
      plugin: Pick<Plugin, 'name'>
      imports?: string
      prepend?: string
      content: string
    }[]
  }): MaybePromise<{
    imports?: string
    prepend?: string
    content: string
  }>
  /**
   * Validate plugin configuration or other @abstract-money/cli settings require for plugin.
   */
  validate?(): MaybePromise<void>
}

export type Config = {
  /** Contracts to use in commands */
  contracts?: ContractConfig[]
  /** Output file path */
  out: string
  /** Plugins to run */
  plugins?: Plugin[]
}

export function defineConfig(
  config: MaybeArray<Config> | (() => MaybePromise<MaybeArray<Config>>),
) {
  return config
}

export const defaultConfig = {
  out: 'src/generated.ts',
  contracts: [],
  plugins: [react()],
} satisfies Config
