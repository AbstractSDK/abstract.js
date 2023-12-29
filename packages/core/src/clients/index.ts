import { BatchCosmWasmClient } from '@abstract-money/cosmwasm-utils'
import { Mixin } from 'ts-mixer'

export * from './errors'
export * from './AbstractClient'
export * from './AbstractAccountClient'
export * from './objects'
export * from './AnsClient'
export * from './events'

/**
 * An execute or query msg for a contract.
 */
export type ContractMsg = Record<string, unknown>

export type EncodedMsg = {
  readonly typeUrl: string
  readonly value: any
}

// Re-export Mixin for use in mixed classes
export { Mixin, BatchCosmWasmClient }

export { jsonToBinary } from './encoding'
