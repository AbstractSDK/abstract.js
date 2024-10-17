import * as s from 'string-ts'
import { RegistryTypes } from '../../../codegen/abstract'
import { moduleVersionToString } from './module-version-to-string'
export function formatModuleIdWithVersion(
  namespace: RegistryTypes.ModuleInfo['namespace'],
  name: RegistryTypes.ModuleInfo['name'],
  version: RegistryTypes.ModuleInfo['version'],
) {
  return s.join([namespace, name, moduleVersionToString(version)] as const, ':')
}
