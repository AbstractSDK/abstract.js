import * as s from 'string-ts'
import { MODULE_DELIMITER, type ModuleId } from './module-id'

export function moduleIdToName<const TModuleId extends ModuleId = ModuleId>(
  id: TModuleId,
): s.Split<TModuleId, ':'>[0] {
  return s.split(id, MODULE_DELIMITER)[0]
}
