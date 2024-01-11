import * as s from 'string-ts'
import { MODULE_DELIMITER } from '../ModuleId'
import { type ModuleId } from './module-id'

export function getName<const TModuleId extends ModuleId = ModuleId>(
  id: TModuleId,
): s.Split<TModuleId, ':'>[0] {
  return s.split(id, MODULE_DELIMITER)[0]
}
