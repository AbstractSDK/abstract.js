import { RegistryTypes } from '../../codegen/abstract'

export function registryModuleToVersion<
  const TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
>(module: TVcModule) {
  return module.info.version
}
