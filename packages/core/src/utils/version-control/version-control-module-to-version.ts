import { VersionControlTypes } from '../../codegen/abstract'

export function versionControlModuleToVersion<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(module: TVcModule) {
  return module.info.version
}
