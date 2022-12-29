import { ModuleInfo } from "../native/version-control/VersionControl.types";

interface ModuleById {
  moduleId: string
  provider?: never
  name?: never
}

interface ModuleByName {
  moduleId?: never
  provider: string
  name: string
}

export type ModuleByIdOrName = ModuleById | ModuleByName

export class AbstractModule {
  static latest({
    moduleId,
    provider: moduleProvider,
    name: moduleName,
  }: ModuleByIdOrName): ModuleInfo {
    const [provider, name] = (moduleId ? moduleId.split(':') : [moduleProvider, moduleName]) as [
      string,
      string
    ]

    return {
      provider,
      name,
      version: {
        latest: {},
      },
    }
  }

  private static readonly ABSTRACT_PROVIDER = 'abstract'

  static latestAbstract(moduleName: string): ModuleInfo {
    return this.latest({ provider: this.ABSTRACT_PROVIDER, name: moduleName })
  }
}
