import {
  ABSTRACT_API_URL,
  AccountId,
  accountIdToString,
} from '@abstract-money/core'
import {
  BatchCosmWasmClient,
  type BatchCosmWasmClientOptions,
} from '@abstract-money/cosmwasm-utils'
import {
  CosmWasmClient,
  type HttpEndpoint,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { Variables } from 'graphql-request'
import semverSatisfies from 'semver/functions/satisfies'
import {
  ApiClient,
  PublicClient,
  createApiClient,
  createPublicClient,
} from '../../clients'
import { RegistryClient, RegistryQueryClient } from '../../codegen/abstract'
import { gql } from '../../codegen/gql'
import { assets, chains } from '../../utils/chain-registry'
import { graphqlRequest } from '../api'
import { AbstractModule } from '../clients/objects'
import { AbstractAccountQueryClient } from './AbstractAccountClient'
import { AnsClient, AnsQueryClient } from './AnsClient'
import { ChainRegistryClient } from './ChainRegistryClient'

type ParametersExceptFirst<F> = F extends (arg0: any, ...rest: infer R) => any
  ? R
  : never

export interface IAbstractQueryClient {
  client: CosmWasmClient
  readonly registryAddress: string
  readonly ansHostAddress: string
  connectSigningClient(
    signingClient: SigningCosmWasmClient,
    sender: string,
  ): AbstractClient
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

export const CHAIN_DEPLOYMENT_QUERY = gql(/* GraphQL */ `
  query Deployment($chain: ID!) {
    version
    deployment(chain: $chain) {
      ansHost
      registry
      accountFactory
    }
    chainInfo(chain: $chain) {
      rpcUrl
    }
  }
`)

/**
 * Options for the {@link AbstractQueryClient}
 * @property useBatchClient - Whether to use the {@link BatchCosmWasmClient} instead of the
 *   {@link CosmWasmClient}.
 * @property overrideApiUrl - Override the API URL for accessing Abstract.
 * @property batchClientOptions - Options for the {@link BatchCosmWasmClient}.
 * @property rpcUrl - The RPC URL to use for the {@link CosmWasmClient}.
 * @deprecated
 */
export interface AbstractQueryClientOptions {
  useBatchClient?: boolean
  overrideApiUrl?: string
  batchClientOptions?: BatchCosmWasmClientOptions
  rpcUrl?: string
}

export const DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS = { useBatchClient: false }

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
 */
export class AbstractQueryClient implements IAbstractQueryClient {
  readonly _publicClient: PublicClient
  readonly _apiClient: ApiClient
  client: CosmWasmClient
  readonly registryAddress: string
  readonly ansHostAddress: string
  readonly apiUrl: string
  accountCache: Map<string, AbstractAccountQueryClient> = new Map()
  _chainName: string | undefined

  constructor(
    {
      client,
      registryAddress,
      ansHostAddress,
    }: Omit<IAbstractQueryClient, 'connectSigningClient'>,
    options?: { apiUrl?: string },
  ) {
    if (!client) throw new Error(`CosmWasm client is missing: ${client}`)
    this.client = client
    this.registryAddress = registryAddress
    this.ansHostAddress = ansHostAddress
    this.apiUrl = options?.apiUrl ?? ABSTRACT_API_URL
    this.connectSigningClient = this.connectSigningClient.bind(this)
    this._publicClient = createPublicClient({
      apiUrl: options?.apiUrl,
      cosmWasmClient: client,
    })
    this._apiClient = createApiClient({ apiUrl: options?.apiUrl })
  }

  async getAccountsOfOwner(
    owner: string,
    chains: string[],
  ): Promise<AccountId[]> {
    const result = await this._apiClient.getAccountsByOwnerFromApi({
      owner,
      chains,
    })
    return result.map((r) => ({
      chainName: r.chainName,
      seq: r.seq,
      trace: r.trace,
    }))
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
    options: AbstractQueryClientOptions = DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS,
  ): Promise<AbstractQueryClient> {
    const apiUrl = options.overrideApiUrl ?? ABSTRACT_API_URL
    const cosmWasmClient = await (options.useBatchClient
      ? BatchCosmWasmClient.connect(endpoint, options.batchClientOptions)
      : CosmWasmClient.connect(endpoint))

    const registryClient = new RegistryQueryClient(
      cosmWasmClient,
      registryAddress,
    )

    const [ansHostAddress] = await Promise.all(
      ['ans-host'].map(async (moduleName) => {
        const module = await AbstractModule.loadById(
          registryClient,
          `abstract:${moduleName}`,
          version,
        )

        return module.address
      }),
    )

    return new AbstractQueryClient(
      {
        client: cosmWasmClient,
        registryAddress: registryAddress,
        ansHostAddress: ansHostAddress as string,
      },
      { apiUrl },
    )
  }

  /**
   * Connect to Abstract on a specific chain. This will query the Abstract API to find the
   * addresses of the deployed contracts on the chain.
   * @param chainId - The chain ID to connect to. For example, 'juno-1'.
   * @param options - Options for the query client. Allows overriding of certain defaults such as
   *   the RPC url.
   */
  static async connectToChain(
    chainId: string,
    options: AbstractQueryClientOptions = DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS,
  ): Promise<AbstractQueryClient> {
    const apiUrl = options.overrideApiUrl ?? ABSTRACT_API_URL
    const deploymentData = await graphqlRequest(
      apiUrl,
      CHAIN_DEPLOYMENT_QUERY,
      {
        chain: chainId,
      },
    )
    // TODO: check that the version of the subgraph matches that in ABstractJS

    const { ansHost: ansHostAddress, registry: registryAddress } =
      deploymentData.deployment

    const rpcEndpoint = options.rpcUrl || deploymentData.chainInfo.rpcUrl

    const cosmWasmClient = await (options.useBatchClient
      ? BatchCosmWasmClient.connect(rpcEndpoint, options.batchClientOptions)
      : CosmWasmClient.connect(rpcEndpoint))

    return new AbstractQueryClient(
      {
        client: cosmWasmClient,
        registryAddress,
        ansHostAddress,
      },
      { apiUrl },
    )
  }

  /**
   * Query the Abstract API.
   * @param params
   */
  public async queryApi<TResult, V extends Variables = Variables>(
    ...params: ParametersExceptFirst<typeof graphqlRequest<TResult, V>>
  ): Promise<ReturnType<typeof graphqlRequest<TResult, V>>> {
    return graphqlRequest(this.apiUrl, ...params)
  }

  public async getChainName(): Promise<string> {
    if (this._chainName) return this._chainName

    const chainId = await this.client.getChainId()
    const chainName = new ChainRegistryClient(chains, assets).chainIdToName(
      chainId,
    )
    this._chainName = chainName

    return chainName
  }

  /**
   * Get the chain id for the connected chain.
   */
  public async getChainId(): Promise<string> {
    return this.client.getChainId()
  }

  /**
   * Get the registry query client.
   */

  get registryQueryClient(): RegistryQueryClient {
    return new RegistryQueryClient(this.client, this.registryAddress)
  }

  /**
   * Get the Abstract Name Service query client.
   */
  get ansQueryClient(): AnsQueryClient {
    return new AnsQueryClient(this.client, this.ansHostAddress)
  }

  /**
   * Load an Account query client.
   * @param accountId - {@link AbstractAccountId} or a number representing the sequence of the
   *   account.
   * @param refetch - If true, the account will be loaded from the blockchain, even if it is
   *   already in the cache.
   */
  async loadAccount(
    accountId: AccountId,
    refetch?: boolean,
  ): Promise<AbstractAccountQueryClient> {
    let account: AbstractAccountQueryClient

    // check the cache
    const accountIdString = accountIdToString(accountId)

    if (this.accountCache.has(accountIdString) && !refetch) {
      account = this.accountCache.get(
        accountIdString,
      ) as AbstractAccountQueryClient
    } else {
      // load and set if not already present
      account = await AbstractAccountQueryClient.load(this, accountId)
      this.accountCache.set(accountIdString, account)
    }
    return account
  }
  //
  // /**
  //  * Load all local accounts.
  //  */
  // async loadAccounts(
  //   startAfterSequence?: number,
  //   count?: number,
  // ): Promise<AbstractAccountQueryClient[]> {
  //   const nextAccountIdSeq = await this.factoryQueryClient
  //     .config()
  //     .then(({ local_account_sequence }) => local_account_sequence)
  //
  //   if (startAfterSequence && startAfterSequence >= nextAccountIdSeq) return []
  //
  //   const accounts: AbstractAccountQueryClient[] = []
  //   for (
  //     let accountSeq = startAfterSequence ?? 0;
  //     accountSeq < nextAccountIdSeq;
  //     accountSeq++
  //   ) {
  //     const account = await this.loadAccount(
  //       await this.localAccountId(accountSeq),
  //     )
  //     accounts.push(account)
  //     if (count && accounts.length >= count) break
  //   }
  //
  //   return accounts
  // }
  //
  // /**
  //  * Filter the list of Accounts by the given filter.
  //  * This method is extremely inefficient if querying live (as opposed to archive) nodes.
  //  * @param filter
  //  */
  // async filterAccounts(
  //   filter: AccountFilter,
  // ): Promise<AbstractAccountQueryClient[]> {
  //   const chainName = await this.getChainName()
  //   const nextAccountIdSeq = await this.factoryQueryClient
  //     .config()
  //     .then(({ local_account_sequence }) => local_account_sequence)
  //
  //   const matchingAccounts: AbstractAccountQueryClient[] = []
  //   for (let accountSeq = 0; accountSeq < nextAccountIdSeq; accountSeq++) {
  //     const account = await this.loadAccount(
  //       AbstractAccountId.local(chainName, accountSeq),
  //     )
  //
  //     if (filter.owner) {
  //       const owner = await account.getOwner()
  //       if (owner !== filter.owner) continue
  //     }
  //
  //     const installedModules =
  //       filter.moduleIds || filter.modules ? await account.getModules() : []
  //     const modulesFilter = filter.modules || []
  //     if (filter.moduleIds) {
  //       modulesFilter.push(...filter.moduleIds.map((id) => ({ id })))
  //     }
  //
  //     if (
  //       modulesFilter.every(({ id, version }) => {
  //         const installedModule = installedModules.find(
  //           (module) => module.id === id,
  //         )
  //
  //         return (
  //           installedModule &&
  //           (!version ||
  //             semverSatisfies(installedModule.version.version, version))
  //         )
  //       })
  //     ) {
  //       matchingAccounts.push(account)
  //     }
  //   }
  //
  //   return matchingAccounts
  // }

  /**
   * Upgrade the abstract client to an executable client.
   * @param signingClient
   * @param sender
   * @see AbstractClient#fromQueryClient
   */
  public connectSigningClient(
    signingClient: SigningCosmWasmClient,
    sender: string,
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

interface IAbstractClient
  extends Omit<IAbstractQueryClient, 'connectSigningClient'> {
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

  constructor(base: IAbstractClient, options?: { apiUrl?: string }) {
    super(base, options)
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
   * Upgrade a query client to a signing client.
   */
  public static fromQueryClient(
    queryClient: AbstractQueryClient,
    signingClient: SigningCosmWasmClient,
    sender: string,
  ): AbstractClient {
    return new AbstractClient({ ...queryClient, client: signingClient, sender })
  }
}
