import { type ModuleId } from '@abstract-money/core'

export const ABSTRACT_NAMESPACE = 'abstract'

/**
 * Build an abstract module id from a module name.
 * @param moduleName
 */
export const abstractModuleId = (moduleName: string): ModuleId =>
  `${ABSTRACT_NAMESPACE}:${moduleName}`
