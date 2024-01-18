import { P, match } from 'ts-pattern'
import { VersionControlTypes } from '../../../codegen/abstract'

type VcModuleInfo = VersionControlTypes.ModuleInfo
type ModuleVersion = VersionControlTypes.ModuleVersion

interface ModuleById {
  moduleId: string
  namespace?: never
  name?: never
}

interface ModuleByName {
  moduleId?: never
  namespace: string
  name: string
}

export type ModuleByIdOrName = ModuleById | ModuleByName

export class ModuleInfo implements VcModuleInfo {
  name: string
  namespace: string
  version: ModuleVersion

  public static readonly ABSTRACT_PROVIDER = 'abstract'

  /**

   * @param moduleId
   * @param moduleProvider
   * @param moduleName
   * @param version IF not provided, latest will be loaded
   */
  constructor({
    moduleId,
    namespace: moduleProvider,
    name: moduleName,
    version,
  }: ModuleByIdOrName & { version?: string }) {
    const [provider, name] = (
      moduleId ? moduleId.split(':') : [moduleProvider, moduleName]
    ) as [string, string]

    this.name = name
    this.namespace = provider
    this.version = version && version !== 'latest' ? { version } : 'latest'
  }

  /**
   * Return the full module id with the namespace and name.
   */
  get id(): string {
    return [this.namespace, this.name].join(':')
  }

  /**
   * Return the full module id with the namespace and name concatenated with the version.
   */
  get idWithVersion(): string {
    return [this.id, this.versionString].join(':')
  }

  /**
   * Get the version as a string.
   * Latest version returns "latest".
   */
  get versionString(): string {
    return ModuleInfo.versionAsString(this.version)
  }

  static from(moduleInfo: VcModuleInfo): ModuleInfo {
    const version = this.versionAsString(moduleInfo.version)

    return new ModuleInfo({
      namespace: moduleInfo.namespace,
      name: moduleInfo.name,
      version,
    })
  }

  private static versionAsString(version: VcModuleInfo['version']): string {
    return match(version)
      .with({ version: P.select() }, (version) => version)
      .with('latest', () => 'latest')
      .otherwise((x) => {
        throw new Error(`Unexpected version: ${JSON.stringify(x)}`)
      })
  }

  static latest(idOrName: ModuleByIdOrName): ModuleInfo {
    return new ModuleInfo({ ...idOrName })
  }

  /**
   * Build abstract module info from the given name and version.
   * @param moduleName
   * @param version
   */
  static abstract(moduleName: string, version?: string): ModuleInfo {
    return new ModuleInfo({
      namespace: this.ABSTRACT_PROVIDER,
      name: moduleName,
      version,
    })
  }

  /**
   * Transform a string formatted like "namespace:name:version" into a ModuleInfo object.
   * @param info
   */
  static fromString(info: string): ModuleInfo {
    const split = info.split(':')
    if (split.length !== 3) {
      throw new Error(`Invalid module info: ${info}`)
    }
    const [namespace, name, version] = split
    return new ModuleInfo({
      // TODO: remove this hack
      namespace: namespace as string,
      // TODO: remove this hack
      name: name as string,
      version,
    })
  }
}
