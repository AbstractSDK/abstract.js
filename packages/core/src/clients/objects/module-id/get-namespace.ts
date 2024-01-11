import * as s from 'string-ts'
import { MODULE_DELIMITER } from '../ModuleId'
import { type ModuleId } from './module-id'

export function getNamespace<const TModuleId extends ModuleId = ModuleId>(
  id: TModuleId,
): s.Split<TModuleId, ':'>[1] {
  const namespace = s.split(id, MODULE_DELIMITER)[0]
  if (!namespace) {
    throw new Error(`Cannot find namespace for module: ${id}`)
  }
  return namespace
}
