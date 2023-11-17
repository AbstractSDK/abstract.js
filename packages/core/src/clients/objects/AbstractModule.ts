import {
  type Module as VcModule,
  type ModuleConfiguration,
  type ModuleInfo as VcModuleInfo,
  type ModuleReference,
  type ModuleResponse,
} from '../../native/registry/Registry.types'
import { ModuleInfo } from './moduleInfo'
import { match, P } from 'ts-pattern'
import { type RegistryQueryClient } from '../../native'
import { ModuleNotFoundError } from '../errors'
import { type ModuleType } from '../../clients/AbstractAccountClient'
import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { type ModuleData } from '../../modules/Module.types'
import { RAW_QUERY_KEYS } from '../../constants'
import { rawQuery } from '../helpers'

interface IAbstractModule extends VcModule {
  config: ModuleConfiguration
}
/**
 * A class representing an abstract module.
 */
export class AbstractModule implements VcModule {
  info: ModuleInfo
  reference: ModuleReference
  config: ModuleConfiguration
  _data: ModuleData | null

  constructor({ info, reference }: VcModule, config: ModuleConfiguration) {
    this.info = ModuleInfo.from(info)
    this.reference = reference
    this.config = config
    this._data = null
  }

  /**
   * Create an Abstract module from the chain response.
   * @param response
   */
  static fromResponse(response: ModuleResponse) {
    return new AbstractModule(response.module, response.config)
  }

  // static from(response: [VcModuleInfo, ModuleReference]) {
  //   const [info, reference] = response
  //   return new Module({ info, reference })
  // }

  /**
   * The module id with the namespace.
   * Example: abstract:bank
   */
  get name(): string {
    return this.info.name
  }

  static async loadById(
    registryClient: RegistryQueryClient,
    moduleId: string,
    version?: string,
  ): Promise<AbstractModule> {
    const moduleInfo = new ModuleInfo({ moduleId, version })
    return await AbstractModule.loadByInfo(registryClient, moduleInfo)
  }

  static async loadByInfo(
    registryClient: RegistryQueryClient,
    moduleInfo: VcModuleInfo,
  ): Promise<AbstractModule> {
    const info = ModuleInfo.from(moduleInfo)
    return await registryClient
      .modules({
        infos: [info],
      })
      .then(({ modules }) => modules?.[0])
      .then((m) => {
        if (!m) throw new ModuleNotFoundError(info.id, info.versionString)
        return m
      })
      .catch((_) => {
        throw new ModuleNotFoundError(info.id, info.versionString)
      })
      .then(AbstractModule.fromResponse)
  }

  static async loadByInfos(
    registryClient: RegistryQueryClient,
    moduleInfos: Array<VcModuleInfo>,
  ): Promise<Array<AbstractModule>> {
    const modules = await registryClient
      .modules({
        infos: moduleInfos,
      })
      .then(({ modules }) => modules)

    return modules.map(AbstractModule.fromResponse)
  }

  /**
   * Get the type of this module.
   */
  get type(): ModuleType {
    return match(this.reference)
      .with({ account_base: P.select() }, () => 'account_base' as const)
      .with({ app: P.select() }, () => 'app' as const)
      .with({ standalone: P.select() }, () => 'standalone' as const)
      .with({ native: P.select() }, () => 'native' as const)
      .with({ adapter: P.select() }, () => 'adapter' as const)
      .otherwise((x) => {
        throw new Error(
          `Expected module with code id, got ${JSON.stringify(x)}`,
        )
      })
  }

  get address(): string {
    return match(this.reference)
      .with({ native: P.select() }, (native) => native)
      .with({ adapter: P.select() }, (adapter) => adapter)
      .otherwise((x) => {
        throw new Error(`Expected addressable module, got ${JSON.stringify(x)}`)
      })
  }

  get codeId(): number {
    return match(this.reference)
      .with({ account_base: P.select() }, (core) => core)
      .with({ app: P.select() }, (app) => app)
      .with({ standalone: P.select() }, (standalone) => standalone)
      .otherwise((x) => {
        throw new Error(
          `Expected module with code id, got ${JSON.stringify(x)}`,
        )
      })
  }

  /**
   * Retrieve the module data for a given module.
   * @throws Error if module not found
   * @returns module data if instantiated, null otherwise
   */
  async getModuleData(client: CosmWasmClient): Promise<ModuleData | null> {
    // If we've already retrieved the data, return it
    if (this._data != null) {
      return this._data
    }
    // Retrieve the first instantiation of the module
    const firstInstantiation = await match(this.type)
      .with('adapter', async () => {
        return Promise.resolve(this.address)
      })
      // TODO: not all standalones will have module_data
      .with('standalone', 'app', async () => {
        // retrieve the first instantiation
        const instantiations = await client.getContracts(this.codeId)
        const firstInstantiation = instantiations[0]
        if (!firstInstantiation) {
          console.log(
            `Could not find first instantiation of ${this.info.idWithVersion}`,
          )
          return null
        }
        return Promise.resolve(firstInstantiation)
      })
      .with('native', 'account_base', () => {
        return null
      })
      .otherwise(() => {
        throw new Error(
          `Expected module known type, got ${JSON.stringify(this.type)}`,
        )
      })

    // If there is no instantiation, we will return null instead of erroring
    if (firstInstantiation === null) {
      return null
    }

    console.log(firstInstantiation)

    return await rawQuery<ModuleData | null>({
      readOnlyClient: client,
      address: firstInstantiation,
      key: RAW_QUERY_KEYS.ModuleData,
    })
  }
}
