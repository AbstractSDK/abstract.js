import { VersionControlTypes } from '../../../codegen/abstract'
export function moduleVersionToString<
  TVersion extends VersionControlTypes.ModuleInfo['version'] = VersionControlTypes.ModuleInfo['version'],
>(version: TVersion) {
  if (typeof version !== 'string') {
    return version.version
  }
  if (version === 'latest') return version
  throw new Error(`Unexpected version: ${JSON.stringify(version)}`)
}
