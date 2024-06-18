import { type ModuleId } from '@abstract-money/core'

/**
 * Build an abstract module id from a module name.
 * @param moduleName
 */
export const abstractModuleId = (moduleName: string): ModuleId =>
  `abstract:${moduleName}`
