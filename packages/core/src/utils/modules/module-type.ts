import { ModuleReference } from '../../codegen/abstract/cosmwasm-codegen/Registry.types'
import { VariantKeys } from '../cosmwasm/contract-msg-builder'

export type ModuleType = VariantKeys<ModuleReference>
