import { Mixin } from 'ts-mixer'
import { BatchCosmWasmClient } from '@abstract-money/cosmwasm'
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
// Re-export Mixin for use in mixed classes
export { Mixin, BatchCosmWasmClient }
