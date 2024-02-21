import * as s from 'string-ts'
import { MODULE_DELIMITER, type ModuleId } from './types'

/**
 * Retrieve the namespace from a module id.
 * abstract:module => module
 */
export function moduleIdToName<const TModuleId extends ModuleId = ModuleId>(
  id: TModuleId,
): s.Split<TModuleId, ':'>[1] {
  const split = s.split(id, MODULE_DELIMITER)
  if (split.length < 2 || !split[1]) {
    throw new Error(`Cannot find name for module: ${id}`)
  }
  return split[1]
}
