import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { P, match } from 'ts-pattern'
import { type ModuleType } from '../../clients/AbstractAccountClient'
import { RAW_QUERY_KEYS } from '../../constants'

import {
  VersionControlQueryClient as RegistryQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'

type VcModule = VersionControlTypes.Module
type ModuleConfiguration = VersionControlTypes.ModuleConfiguration
type VcModuleInfo = VersionControlTypes.ModuleInfo
type ModuleReference = VersionControlTypes.ModuleReference
type ModuleResponse = VersionControlTypes.ModuleResponse

import { type ModuleData } from '../../generics/Module.types'
import { ModuleNotFoundError } from '../errors'
import { rawQuery } from '../helpers'
import { ModuleInfo } from './moduleInfo'

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
    moduleInfos: VcModuleInfo[],
  ): Promise<AbstractModule[]> {
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
      .with({ account: P.select() }, () => 'account' as const)
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
      .with({ account: P.select() }, (core) => core)
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
      .with('native', 'account', () => {
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
