import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { Mixin } from 'ts-mixer'
import { P, match } from 'ts-pattern'
import { ModuleInfo } from '../../clients'
import { AbstractModule } from '../../clients/objects/AbstractModule'
import { ABSTRACT_CONSTANTS } from '../../constants'
import {
  type RegistryInterface,
  type RegistryReadOnlyInterface,
} from '../registry'
import {
  RegistryClient as ARegistryClient,
  RegistryQueryClient as ARegistryQueryClient,
} from '../registry/Registry.client'
import {
  type ModuleFilter,
  type ModuleInfo as VcModuleInfo,
  type ModuleReference,
  ModuleResponse,
} from '../registry/Registry.types'

export type VcModuleEntry = [ModuleInfo, ModuleReference]
interface IRegistryQueryClient extends RegistryReadOnlyInterface {
  /**
   * List all modules in Version control.
   */
  listModules({
    startAfter,
    filter,
  }: {
    startAfter: VcModuleInfo
    filter: ModuleFilter
  }): Promise<AbstractModule[]>

  /**
   * GEt a single module from Version control.
   */
  module(moduleInfo: VcModuleInfo): Promise<AbstractModule>
}

export class RegistryQueryClient
  extends ARegistryQueryClient
  implements IRegistryQueryClient
{
  protected _moduleCache: Map<string, AbstractModule> = new Map()

  constructor(client: CosmWasmClient, contractAddress: string) {
    super(client, contractAddress)

    this.listModules = this.listModules.bind(this)
    this.module = this.module.bind(this)
  }

  /**
   * Store a module in the class' cache.
   * @param module
   */
  protected _cacheModule(module: AbstractModule): void {
    this._moduleCache.set(module.info.idWithVersion, module)
  }

  /**
   * Retrieve a module from the class' cache.
   * @param moduleInfo
   */
  protected _getCachedModule(
    moduleInfo: VcModuleInfo,
  ): AbstractModule | undefined {
    // for some odd reason, we can't use ModuleInfo.from here...
    const version = match(moduleInfo.version)
      .with({ version: P.select() }, (version) => version)
      .with('latest', () => 'latest')
    return this._moduleCache.get(
      [moduleInfo.namespace, moduleInfo.version, version].join(':'),
    )
  }

  /**
   * Retrieve a module from the cache or do a callback to retrieve the module.
   * @param moduleInfo
   * @param getter
   */
  async _getOrSetModule(
    moduleInfo: VcModuleInfo,
    getter: () => Promise<AbstractModule>,
  ): Promise<AbstractModule> {
    const cachedModule = this._getCachedModule(moduleInfo)
    if (cachedModule) {
      return cachedModule
    }
    const module = await getter()
    this._cacheModule(module)
    return module
  }

  /**
   * Retrieve a module by its info.
   * @param moduleInfo
   */
  public async module(moduleInfo: VcModuleInfo): Promise<AbstractModule> {
    return this._getOrSetModule(
      moduleInfo,
      async () => await AbstractModule.loadByInfo(this, moduleInfo),
    )
  }

  /**
   * List all modules in Version control.
   */
  public async listModules({
    startAfter: userPageToken,
    filter,
  }: {
    startAfter: VcModuleInfo
    filter: ModuleFilter
  }): Promise<AbstractModule[]> {
    const moduleResponses: ModuleResponse[] = []

    let startAfter: VcModuleInfo = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      moduleResponses.push(
        ...(await this.moduleList({
          filter,
          limit: ABSTRACT_CONSTANTS.MAX_VC_PAGE_SIZE,
          startAfter,
        }).then(({ modules }) => {
          hasNextPage = modules.length === ABSTRACT_CONSTANTS.MAX_VC_PAGE_SIZE
          // TODO: remove this hack
          startAfter = modules[modules.length - 1]?.module?.info as VcModuleInfo
          return modules
        })),
      )
    }

    const modules = moduleResponses.map(AbstractModule.fromResponse)
    // cache each of the responses
    modules.forEach((module) => this._cacheModule(module))

    return modules
  }
}

interface IVcClient extends IRegistryQueryClient, RegistryInterface {}

export class RegistryClient
  extends Mixin(ARegistryClient, RegistryQueryClient)
  implements IVcClient {}
