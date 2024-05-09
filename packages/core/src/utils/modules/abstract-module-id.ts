/**
 * Build an abstract module id from a module name.
 * @param moduleName
 */
export const abstractModuleId = (moduleName: string): string =>
  `abstract:${moduleName}`
