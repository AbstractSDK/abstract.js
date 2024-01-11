import * as s from 'string-ts'
import { VersionControlTypes } from '../../../codegen/abstract'
import { moduleVersionToString } from './module-version-to-string'
export function getModuleIdWithVersion(
  namespace: VersionControlTypes.ModuleInfo['namespace'],
  name: VersionControlTypes.ModuleInfo['name'],
  version: VersionControlTypes.ModuleInfo['version'],
) {
  return s.join([namespace, name, moduleVersionToString(version)] as const, ':')
}
