import {
  CosmWasmClient,
  type HttpEndpoint,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import {
  AnsHostMessageComposer,
  FactoryClient,
  FactoryMessageComposer,
  FactoryQueryClient,
  RegistryMessageComposer,
} from '../native'
import { AnsClient, AnsQueryClient } from './AnsClient'
import { AbstractAccountQueryClient } from './AbstractAccountClient'
import { AbstractModule } from '../clients/objects'
import { RegistryClient, RegistryQueryClient } from '../native/registry/RegistryClient'
import semverSatisfies from 'semver/functions/satisfies'
import { type GovernanceDetailsForString } from '../native/factory/Factory.types'
import { findAbstractAttribute } from './events'
import { BatchCosmWasmClient, type BatchCosmWasmClientOptions } from '@abstract-money/cosmwasm'

export interface IAbstractQueryClient {
  client: CosmWasmClient
  readonly registryAddress: string
  readonly ansHostAddress: string
  readonly factoryAddress: string
  connectSigningClient(signingClient: SigningCosmWasmClient, sender: string): AbstractClient
}

export interface AccountFilter {
  moduleIds?: string[]
  modules?: AccountModuleFilter[]
  owner?: string
}

export interface AccountModuleFilter {
  id: string
  version?: string
}

const CHAIN_DEPLOYMENT_QUERY = `query Deployment($chain: ID!) {
  version
  deployment(chain: $chain) {
    ansHost
    versionControl
    accountFactory
  }
  chainInfo(chain: $chain) {
    rpcUrl
  }
}`

/**
 * Options for the {@link AbstractQueryClient}
 * @property useBatchClient - Whether to use the {@link BatchCosmWasmClient} instead of the {@link CosmWasmClient}.
 * @property overrideApiUrl - Override the API URL for accessing Abstract.
 * @property batchClientOptions - Options for the {@link BatchCosmWasmClient}.
 * @property rpcUrl - The RPC URL to use for the {@link CosmWasmClient}.
 */
export interface AbstractQueryClientOptions {
  useBatchClient?: boolean
  overrideApiUrl?: string
  batchClientOptions?: BatchCosmWasmClientOptions
  rpcUrl?: string
}

const DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS = { useBatchClient: false }

/**
 * The AbstractQueryClient class provides an interface to interact with the blockchain.
 *
 * This client provides base functionality for querying data from the blockchain,
 * but does not support write operations (transactions).
 *
 * It provides access to various sub-clients that interact with specific parts of the blockchain,
 * like the Abstract Name Service, Registry, and Account Factory.
 *
 * To perform write operations, use the {@link AbstractClient} class.
 *
 * @property client - An instance of {@link CosmWasmClient}, used for blockchain interactions.
 * @property registryAddress - The address of the registry contract.
 * @property ansHostAddress - The address of the Abstract Name Service host.
 * @property factoryAddress - The address of the Account Factory.
 */
export class AbstractQueryClient implements IAbstractQueryClient {
  client: CosmWasmClient
  readonly registryAddress: string
  readonly factoryAddress: string
  readonly ansHostAddress: string
  accountCache: Map<number, AbstractAccountQueryClient> = new Map()

  constructor({
    client,
    registryAddress,
    ansHostAddress,
    factoryAddress,
  }: Omit<IAbstractQueryClient, 'connectSigningClient'>) {
    if (!client) throw new Error(`CosmWasm client is missing: ${client}`)
    this.client = client
    this.registryAddress = registryAddress
    this.factoryAddress = factoryAddress
    this.ansHostAddress = ansHostAddress
    this.connectSigningClient = this.connectSigningClient.bind(this)
  }

  /**
   * Connect to a specific instance of Abstract via its Registry address.
   * @param endpoint
   * @param registryAddress
   * @param version - the version of abstract to load
   * @param options - options for the query client
   */
  static async connect(
    endpoint: string | HttpEndpoint,
    registryAddress: string,
    version?: string,
    options: AbstractQueryClientOptions = DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS
  ): Promise<AbstractQueryClient> {
    const cosmWasmClient = await (options.useBatchClient
      ? BatchCosmWasmClient.connect(endpoint, options.batchClientOptions)
      : CosmWasmClient.connect(endpoint))

    const registryClient = new RegistryQueryClient(cosmWasmClient, registryAddress)

    const [factoryAddress, ansHostAddress] = await Promise.all(
      ['account-factory', 'ans-host'].map(async (moduleName) => {
        const module = await AbstractModule.loadById(
          registryClient,
          `abstract:${moduleName}`,
          version
        )

        return module.address
      })
    )

    return new AbstractQueryClient({
      client: cosmWasmClient,
      registryAddress: registryAddress,
      ansHostAddress,
      factoryAddress,
    })
  }

  /**
   * Connect to Abstract on a specific chain. This will query the Abstract API to find the
   * addresses of the deployed contracts on the chain.
   * @param chainId - The chain ID to connect to. For example, 'juno-1'.
   * @param overrideApiUrl - An optional URL to override the default Abstract API URL.
   * @param options - Options for the query client. Allows overriding of certain defaults such as the RPC url.
   */
  static async connectToChain(
    chainId: string,
    options: AbstractQueryClientOptions = DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS
  ): Promise<AbstractQueryClient> {
    const { data } = await fetch(
      options.overrideApiUrl ?? 'https://abstract-subgraph-0-17.fly.dev/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: CHAIN_DEPLOYMENT_QUERY,
          variables: {
            chain: chainId,
          },
        }),
      }
    ).then((r) => r.json())

    if (!data?.deployment || !data?.chainInfo) {
      throw new Error('Unexpected response from GraphQL API')
    }

    // TODO: check that the version of the subgraph matches that in ABstractJS

    const {
      ansHost: ansHostAddress,
      versionControl: registryAddress,
      accountFactory: factoryAddress,
    } = data.deployment

    const rpcEndpoint = options.rpcUrl || data.chainInfo.rpcUrl

    const cosmWasmClient = await (options.useBatchClient
      ? BatchCosmWasmClient.connect(rpcEndpoint, options.batchClientOptions)
      : CosmWasmClient.connect(rpcEndpoint))

    return new AbstractQueryClient({
      client: cosmWasmClient,
      registryAddress: registryAddress,
      ansHostAddress,
      factoryAddress,
    })
  }

  /**
   * Get the registry query client.
   */

  get registryQueryClient(): RegistryQueryClient {
    return new RegistryQueryClient(this.client, this.registryAddress)
  }

  /**
   * Get the Abstract account factory query client.
   */
  get factoryQueryClient(): FactoryQueryClient {
    return new FactoryQueryClient(this.client, this.factoryAddress)
  }

  /**
   * Get the Abstract Name Service query client.
   */
  get ansQueryClient(): AnsQueryClient {
    return new AnsQueryClient(this.client, this.ansHostAddress)
  }

  /**
   * Load an Account query client.
   * @param accountId
   * @param refetch - If true, the account will be loaded from the blockchain, even if it is
   *   already in the cache.
   */
  async loadAccount(accountId: number, refetch?: boolean): Promise<AbstractAccountQueryClient> {
    let account: AbstractAccountQueryClient

    // check the cache
    if (this.accountCache.has(accountId) && !refetch) {
      account = this.accountCache.get(accountId) as AbstractAccountQueryClient
    } else {
      // load and set if not already present
      account = await AbstractAccountQueryClient.load(this, accountId)
      this.accountCache.set(accountId, account)
    }
    return account
  }

  /**
   * Load all accounts.
   */
  async loadAccounts(startAfter?: number, count?: number): Promise<AbstractAccountQueryClient[]> {
    const nextAccountId = await this.factoryQueryClient
      .config()
      .then(({ next_account_id }) => next_account_id)

    if (startAfter && startAfter >= nextAccountId) return []

    const accounts: AbstractAccountQueryClient[] = []
    for (let accountId = startAfter ?? 0; accountId < nextAccountId; accountId++) {
      const account = await this.loadAccount(accountId)
      accounts.push(account)
      if (count && accounts.length >= count) break
    }

    return accounts
  }

  /**
   * Filter the list of Accounts by the given filter.
   * This method is extremely inefficient if querying live (as opposed to archive) nodes.
   * @param filter
   */
  async filterAccounts(filter: AccountFilter): Promise<AbstractAccountQueryClient[]> {
    const latestAccountId = await this.factoryQueryClient
      .config()
      .then(({ next_account_id }) => next_account_id)

    const matchingAccounts: AbstractAccountQueryClient[] = []
    for (let accountId = 0; accountId < latestAccountId; accountId++) {
      const account = await this.loadAccount(accountId)

      if (filter.owner) {
        const owner = await account.getOwner()
        if (owner !== filter.owner) continue
      }

      const installedModules = filter.moduleIds || filter.modules ? await account.getModules() : []
      const modulesFilter = filter.modules || []
      if (filter.moduleIds) {
        modulesFilter.push(...filter.moduleIds.map((id) => ({ id })))
      }

      if (
        modulesFilter.every(({ id, version }) => {
          const installedModule = installedModules.find((module) => module.id === id)

          return (
            installedModule &&
            (!version || semverSatisfies(installedModule.version.version, version))
          )
        })
      ) {
        matchingAccounts.push(account)
      }
    }

    return matchingAccounts
  }

  /**
   * Upgrade the abstract client to an executable client.
   * @param signingClient
   * @param sender
   * @see AbstractClient#fromQueryClient
   */
  public connectSigningClient(
    signingClient: SigningCosmWasmClient,
    sender: string
  ): AbstractClient {
    return AbstractClient.fromQueryClient(this, signingClient, sender)
  }

  /**
   * Clear the account cache.
   */
  clearAccountCache(): void {
    this.accountCache.clear()
  }
}

interface IAbstractClient extends Omit<IAbstractQueryClient, 'connectSigningClient'> {
  client: SigningCosmWasmClient
  sender: string
}

/**
 * The AbstractClient class extends the functionality of the AbstractQueryClient.
 *
 * In addition to the query functionality provided by {@link AbstractQueryClient}, AbstractClient
 * also supports executing transactions.
 *
 * Use this class when you need to perform both read and write operations.
 *
 * @see {AbstractQueryClient#connect} - For connecting to the blockchain.
 * Provides access to the Abstract Name Service ({@link AnsClient}), Registry
 *   ({@link RegistryClient}), and Account Factory ({@link FactoryClient}) clients.
 */
export class AbstractClient extends AbstractQueryClient {
  declare client: SigningCosmWasmClient
  sender: string

  constructor(base: IAbstractClient) {
    super(base)
    const { client, sender } = base
    this.client = client
    this.sender = sender
  }

  /**
   * Get the Abstract name service client.
   */
  get ansClient(): AnsClient {
    return new AnsClient(this.client, this.sender, this.ansHostAddress)
  }

  /**
   * Get the registry client.
   */
  get registryClient(): RegistryClient {
    return new RegistryClient(this.client, this.sender, this.registryAddress)
  }

  /**
   * Get the Abstract account factory client.
   */
  get factoryClient(): FactoryClient {
    return new FactoryClient(this.client, this.sender, this.factoryAddress)
  }

  /**
   * Get the Abstract account factory message composer.
   * @param sender override the sender
   */
  public factoryMsgComposer(sender?: string): FactoryMessageComposer {
    return new FactoryMessageComposer(sender || this.sender, this.factoryAddress)
  }

  /**
   * Get the Abstract Name Service message composer.
   * @param sender override the sender
   */
  public ansMsgComposer(sender?: string): AnsHostMessageComposer {
    return new AnsHostMessageComposer(sender || this.sender, this.ansHostAddress)
  }

  /**
   * Get the registry message composer.
   * @param sender override the sender
   */
  public registryMsgComposer(sender?: string): RegistryMessageComposer {
    return new RegistryMessageComposer(sender || this.sender, this.registryAddress)
  }

  /**
   * Creates a new account with the given owner as the monarch.
   * @param owner - The owner of the account.
   * @param name - The name of the account.
   * @param description - (Optional) The description of the account.
   * @param link - (Optional) The link associated with the account. Must be a valid URL.
   * @returns A promise that resolves to an {@link AbstractAccountQueryClient}.
   */
  async createAccount(
    owner: string,
    name: string,
    description?: string,
    link?: string
  ): Promise<AbstractAccountQueryClient> {
    return this.createAccountWithGovernance(
      {
        Monarchy: {
          monarch: owner,
        },
      },
      name,
      description,
      link
    )
  }

  /**
   * Creates a new account with governance.
   * @param governance - The governance details for the account.
   * @param name - The name of the account.
   * @param description - (Optional) The description of the account.
   * @param link - (Optional) The link associated with the account. Must be a valid URL.
   * @returns A promise that resolves to an {@link AbstractAccountQueryClient}.
   */
  async createAccountWithGovernance(
    governance: GovernanceDetailsForString,
    name: string,
    description?: string,
    link?: string
  ): Promise<AbstractAccountQueryClient> {
    // TODO: validate owner address

    if (link) {
      try {
        new URL(link)
      } catch (error) {
        throw new Error('Invalid link. Must be a valid URL.')
      }
    }

    // Create the account
    const result = await this.factoryClient.createAccount({
      name,
      description,
      link,
      governance,
    })

    const accountId = findAbstractAttribute(result, 'account_id').value
    const managerAddress = findAbstractAttribute(result, 'manager_address').value
    const proxyAddress = findAbstractAttribute(result, 'proxy_address').value

    return new AbstractAccountQueryClient({
      abstract: this,
      accountId: Number(accountId),
      managerAddress,
      proxyAddress,
    })
  }

  /**
   * Upgrade a query client to a signing client.
   */
  public static fromQueryClient(
    queryClient: AbstractQueryClient,
    signingClient: SigningCosmWasmClient,
    sender: string
  ): AbstractClient {
    return new AbstractClient({ ...queryClient, client: signingClient, sender })
  }
}
