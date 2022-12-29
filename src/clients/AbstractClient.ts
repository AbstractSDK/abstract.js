import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
// @ts-ignore
import { HttpEndpoint } from '@cosmjs/tendermint-rpc'
import { match, P } from 'ts-pattern'
import { FactoryQueryClient, VersionControlQueryClient } from "../native";
import { AbstractOsQueryClient } from "./AbstractOsClient";
import { AbstractModule } from "./ModuleInfo";

interface IAbstractQueryClient {
  client: CosmWasmClient
  versionControlAddress: string
}

/**
 * Query client class for Abstract.
 */
export class AbstractQueryClient {
  client: CosmWasmClient
  versionControlClient: VersionControlQueryClient
  osFactoryClient: FactoryQueryClient | undefined

  constructor({ client, versionControlAddress }: IAbstractQueryClient) {
    this.client = client
    this.versionControlClient = new VersionControlQueryClient(client, versionControlAddress)
  }

  static async connect(
    endpoint: string | HttpEndpoint,
    versionControlAddress: string
  ): Promise<AbstractQueryClient> {
    const cosmWasmClient = await CosmWasmClient.connect(endpoint)
    return new AbstractQueryClient({
      client: cosmWasmClient,
      versionControlAddress: versionControlAddress,
    })
  }

  /**
   * Load an OS query client.
   * @param osId
   */
  async loadOs(osId: number): Promise<AbstractOsQueryClient> {
    const osCore = await this.versionControlClient.osCore({ osId })

    return new AbstractOsQueryClient({
      abstract: this,
      osId,
      managerAddress: osCore.os_core.manager,
      proxyAddress: osCore.os_core.proxy,
    })
  }

  async osFactory(): Promise<FactoryQueryClient> {
    if (!this.osFactoryClient) {
      const osFactoryModule = await this.versionControlClient.module({
        module: AbstractModule.latestAbstract('os_factory'),
      })

      if (!osFactoryModule) {
        throw new ModuleNotFoundError(`abstract:os_factory`)
      }

      const address = match(osFactoryModule.module.reference)
        .with({ native: P.select() }, (native) => native)
        .otherwise(() => {
          throw new Error('Expected native module')
        })

      this.osFactoryClient = new FactoryQueryClient(this.client, address)
    }
    return this.osFactoryClient
  }
}

export class ModuleNotFoundError extends Error {
  constructor(moduleId: string) {
    super(`${moduleId} not found.`)
    this.name = 'ModuleNotFoundError'
  }
}

interface IAbstractClient extends IAbstractQueryClient {
  client: SigningCosmWasmClient
}

export class AbstractClient extends AbstractQueryClient {
  client: SigningCosmWasmClient

  constructor({ client, ...base }: IAbstractClient) {
    super({ client, ...base })
    this.client = client
  }
}

// export const matchModuleAddress = (reference: ModuleReference): string => {
//   return match(reference)
//     .with({ core: P.select() }, (core) => core)
//     .with({ api: P.select() }, (api) => api)
//     .with({ app: P.select() }, (app) => app)
//     .with({ standalone: P.select() }, (standalone) => standalone)
// }
//
// export const matchModuleCodeId = (reference: ModuleReference): string => {
//
// }
