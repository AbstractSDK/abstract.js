import { ModuleInfo } from './moduleInfo'

export const MODULE_DELIMITER = ':'

/**
 * A class representing an Abstract module id.
 */
export class ModuleId {
  private readonly _namespace: string
  private readonly _name: string

  constructor(id: string) {
    if (!ModuleId.validate(id)) {
      throw new Error(
        `Invalid module id: ${id}, must be in the format namespace:name`,
      )
    }
    const split = id.split(MODULE_DELIMITER)
    // TODO: remove this hack
    this._namespace = split[0] as string
    // TODO: remove this hack
    this._name = split[1] as string
  }

  get namespace() {
    return this._namespace
  }

  get name() {
    return this._name
  }

  public toString(): string {
    return [this.namespace, this.name].join(MODULE_DELIMITER)
  }

  static validate(id: string): boolean {
    const split = id.split(MODULE_DELIMITER)
    return split.length === 2
  }

  public toModuleInfo(): ModuleInfo {
    return new ModuleInfo({
      namespace: this.namespace,
      name: this.name,
    })
  }
}
