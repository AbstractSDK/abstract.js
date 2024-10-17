import * as s from 'string-ts'
import { MODULE_DELIMITER, type ModuleId } from './types'

/**
 * Retrieve the namespace from a module id.
 * abstract:module => abstract
 */
export function moduleIdToNamespace<
  const TModuleId extends ModuleId = ModuleId,
>(id: TModuleId): s.Split<TModuleId, ':'>[0] {
  const split = s.split(id, MODULE_DELIMITER)
  const namespace = split[0]
  if (split.length < 2 || !namespace) {
    throw new Error(`Cannot find namespace for module: ${id}`)
  }
  return namespace
}
