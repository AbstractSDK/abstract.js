import { ModuleReference } from '../../codegen/abstract/cosmwasm-codegen/VersionControl.types'
import { VariantKeys } from '../cosmwasm/contract-msg-builder'

export type ModuleType = VariantKeys<ModuleReference>
