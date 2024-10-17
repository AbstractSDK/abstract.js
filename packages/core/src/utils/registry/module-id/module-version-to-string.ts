import { RegistryTypes } from '../../../codegen/abstract'
export function moduleVersionToString<
  TVersion extends RegistryTypes.ModuleInfo['version'] = RegistryTypes.ModuleInfo['version'],
>(version: TVersion) {
  if (typeof version !== 'string') {
    return version.version
  }
  if (version === 'latest') return version
  throw new Error(`Unexpected version: ${JSON.stringify(version)}`)
}
