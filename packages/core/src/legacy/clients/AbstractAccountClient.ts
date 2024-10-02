import {
  type ExecuteResult,
  type MsgExecuteContractEncodeObject,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { type JsonObject } from '@cosmjs/cosmwasm-stargate/build/modules'
import { type Coin } from '@cosmjs/stargate'
import { type StdFee } from '@cosmjs/stargate'
import { P, match } from 'ts-pattern'
import {
  AccountMsgComposer as ManagerMessageComposer,
  ManagerClient,
  ManagerExecuteMsgBuilder,
  ManagerQueryClient,
  ManagerTypes,
  ProxyClient,
  ProxyExecuteMsgBuilder,
  ProxyMsgComposer as ProxyMessageComposer,
  ProxyQueryClient,
  ProxyTypes,
  VersionControlTypes,
} from '../../codegen/abstract'

type ManagerModuleInfo = ManagerTypes.ManagerModuleInfo
type GovernanceDetails = ManagerTypes.GovernanceDetailsForString
type CosmosMsgForEmpty = ProxyTypes.CosmosMsgForEmpty
import { ABSTRACT_CONSTANTS } from '../constants'
import {
  AppExecuteMsgFactory,
  AppQueryMsgFactory,
} from '../generics/app/App.msg-factory'

import {
  AdapterExecuteMsgFactory,
  AdapterQueryMsgBuilder,
} from '../generics/adapter/Adapter.msg-factory'
type ModuleReference = VersionControlTypes.ModuleReference
import semver from 'semver/preload'
import { jsonToBinary } from '../../utils/encoding'
import { ContractMsg, EncodedMsg } from '../messages'
import { type AbstractClient, type AbstractQueryClient } from './AbstractClient'
import { rawQuery } from './helpers'
import { AbstractAccountId } from './objects/AbstractAccountId'
import { AnsAssetList } from './objects/AnsAssetList'
import { AssetInfo } from './objects/AssetInfo'
import { AssetList } from './objects/AssetList'

type VariantKeys<T> = T extends T ? keyof T : never
export type ModuleType = VariantKeys<ModuleReference>

interface IAbstractAccountQueryClient {
  abstract: AbstractQueryClient
  accountId: AbstractAccountId
  managerAddress: string
  proxyAddress: string
}

/**
 * Query a module with the given msg.
 */
interface QueryModule<TModuleMsg extends ContractMsg = ContractMsg> {
  moduleId: string
  moduleType?: ModuleType
  queryMsg: TModuleMsg
}

/**
 * The AbstractAccountQueryClient class provides an interface to interact with a specific account.
 * It takes an instance of an AbstractQueryClient and an account ID to initialize.
 *
 * The class exposes methods to query information about an account on the blockchain.
 *
 * @property abstract - An instance of AbstractQueryClient.
 * @property accountId - The id of the account this client is responsible for.
 * @property managerAddress - The manager address associated with the account.
 * @property proxyAddress - The proxy address associated with the account.
 */
export class AbstractAccountQueryClient implements IAbstractAccountQueryClient {
  abstract: AbstractQueryClient
  accountId: AbstractAccountId
  managerAddress: string
  proxyAddress: string
  _owner?: string | null

  constructor({
    abstract,
    accountId,
    managerAddress,
    proxyAddress,
  }: IAbstractAccountQueryClient) {
    this.accountId = accountId
    this.abstract = abstract
    this.managerAddress = managerAddress
    this.proxyAddress = proxyAddress
  }

  /**
   * Load the abstract account client given the **accountId** and the **abstractClient**.
   * @param abstractClient Abstract client connected to the chain.
   * @param accountId The account id.
   */
  public static async load(
    abstractClient: AbstractQueryClient,
    accountId: AbstractAccountId,
  ): Promise<AbstractAccountQueryClient> {
    const { account_base } =
      await abstractClient.registryQueryClient.accountBase({
        accountId: accountId.into(),
      })

    return new AbstractAccountQueryClient({
      abstract: abstractClient,
      accountId,
      managerAddress: account_base.manager,
      proxyAddress: account_base.proxy,
    })
  }

  /**
   * Get the manager query client.
   */
  get managerQueryClient(): ManagerQueryClient {
    return new ManagerQueryClient(this.abstract.client, this.managerAddress)
  }

  /**
   * Get the proxy query client.
   */
  get proxyQueryClient(): ProxyQueryClient {
    return new ProxyQueryClient(this.abstract.client, this.proxyAddress)
  }

  /**
   * Retrieve the account sequence.
   */
  get accountSequence(): number {
    return this.accountId.sequence
  }

  /**
   * Retrieve the deposit address.
   */
  get depositAddress(): string {
    return this.proxyAddress
  }

  /**
   * Return the total value of the Abstract Account against its base asset.
   */
  public async totalValue(): Promise<number> {
    const res = await this.proxyQueryClient.totalValue()
    return +res.total_value
  }

  /**
   * Load the module information for those installed on this Account.
   */
  public async getModules(): Promise<ManagerModuleInfo[]> {
    const { module_infos: modules } = await this.managerQueryClient.moduleInfos(
      {
        limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
      },
    )

    return modules
  }

  /**
   * Retrieve the list of subaccount ids for this Account.
   * @returns the list of subaccount ids.
   */
  public async getSubAccountSequences(): Promise<number[]> {
    return this.managerQueryClient
      .subAccountIds({
        limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
      })
      .then(({ sub_accounts }) => sub_accounts)
  }

  /**
   * Retrieve the list of subaccount ids for this Account.
   * @returns the list of subaccount ids.
   */
  public async getSubAccountIds(): Promise<AbstractAccountId[]> {
    const chainName = await this.abstract.getChainName()
    return this.managerQueryClient
      .subAccountIds({
        limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
      })
      .then(({ sub_accounts }) => sub_accounts)
      .then((subAccounts) =>
        subAccounts.map((seq) => AbstractAccountId.local(chainName, seq)),
      )
  }

  /**
   * Retrieve the list of sub-accounts for this Account.
   */
  public async getSubAccounts(): Promise<AbstractAccountQueryClient[]> {
    const subAccountIds = await this.getSubAccountSequences()
    return Promise.all(
      subAccountIds.map((subAccountId) =>
        this.abstract.loadAccount(subAccountId),
      ),
    )
  }

  /**
   * Load the namespace registered on the Account.
   * @returns the namespace or null if no namespace is registered.
   */
  public async getNamespace(): Promise<string | null> {
    const { registryQueryClient } = this.abstract
    const namespace = await registryQueryClient
      .namespaces({ accounts: [this.accountId.into()] })
      .then((x) => x.namespaces[0]?.[0])

    return namespace ?? null
  }

  public async managerVersion(): Promise<string> {
    const { version } = await rawQuery<{
      contract: string
      version: string
    }>({
      readOnlyClient: this.managerQueryClient.client,
      address: this.managerQueryClient.contractAddress,
      key: 'contract_info',
    })
    return version
  }

  /**
   * Return the owner of the Account.
   *
   * @param invalidateCache If true, refetch the owner from the managerQueryClient.
   * @returns The owner address, or null if no owner is set.
   */
  public async getOwner(invalidateCache?: boolean): Promise<string | null> {
    if (invalidateCache || this._owner === undefined) {
      const version = await this.managerVersion()

      const owner = (await this.managerQueryClient
        .ownership()
        .then(({ owner }) => owner)) as unknown

      // > 0.23.0 returns the full governance type
      if (semver.gte(version, '0.23.0')) {
        const governance = owner as unknown as GovernanceDetails

        this._owner = match(governance)
          .with({ Monarchy: { monarch: P.select() } }, (monarch) => monarch)
          .with({ SubAccount: { proxy: P.select() } }, (proxy) => proxy)
          .with({ Renounced: {} }, () => null)
          .with({ NFT: { collection_addr: P.select() } }, (col) => col)
          .with({ External: { governance_address: P.select() } }, (ext) => ext)
          .otherwise((e) => {
            console.warn(
              `Unknown governance type for ${
                this.managerAddress
              }: ${JSON.stringify(e)}`,
            )
            return JSON.stringify(e)
          })
      } else {
        this._owner = owner as string
      }
    }

    return this._owner ?? null
  }

  /**
   * Return the asset by which the value of the Account is calculated.
   * @returns the base asset.
   */
  public async getBaseAsset(): Promise<AssetInfo> {
    return await this.proxyQueryClient
      .baseAsset()
      .then(({ base_asset }) => base_asset)
  }

  /**
   * Given the **moduleId**, get the address of the module installed on this Account.
   * @param moduleId
   * @returns null if not installed
   */
  public async getModuleAddress(moduleId: string): Promise<string | null> {
    return await this.managerQueryClient
      .moduleAddresses({ ids: [moduleId] })
      .then(({ modules }) => modules[0]?.[1] ?? null)
  }

  /**
   * This constructs a query message that is tailored to the specified module and its
   * type. It can handle 'app' and 'adapter' module types, with the message just being passed on in
   * the default case.
   *
   * @param queryMsg the query message
   * @param moduleType the type of the module
   */
  private wrapModuleQueryMsg<TModuleMsg extends ContractMsg = ContractMsg>(
    queryMsg: TModuleMsg,
    moduleType?: ModuleType,
  ) {
    return match(moduleType)
      .with('app', () => AppQueryMsgFactory.queryApp<TModuleMsg>(queryMsg))
      .with('adapter', () => AdapterQueryMsgBuilder.query<TModuleMsg>(queryMsg))
      .otherwise(() => queryMsg)
  }

  /**
   * Query a module. Not recommended to use directly, use the module specific query methods.
   * @param moduleId
   * @param moduleType
   * @param queryMsg
   */
  public async queryModule<TModuleMsg extends ContractMsg = ContractMsg>({
    moduleId,
    moduleType,
    queryMsg,
  }: QueryModule<TModuleMsg>): Promise<JsonObject> {
    const moduleQueryMsg = this.wrapModuleQueryMsg<TModuleMsg>(
      queryMsg,
      moduleType,
    )

    const moduleAddress = await this.getModuleAddress(moduleId)
    if (!moduleAddress) {
      throw new Error(`${moduleId} not installed`)
    }

    return await this.abstract.client.queryContractSmart(
      moduleAddress,
      moduleQueryMsg,
    )
  }

  /**
   * Upgrade the Abstract Account client to an executable client.
   * @param abstract Abstract client connected to the chain.
   * @see AbstractAccountClient#fromQueryClient
   */
  public connectAbstractClient(
    abstract: AbstractClient,
  ): AbstractAccountClient {
    return AbstractAccountClient.fromQueryClient(this, abstract)
  }

  /**
   * Upgrade the Abstract Account client to an executable client.
   * @see AbstractAccountClient#fromQueryClient
   */
  public connectSigningClient(
    signingClient: SigningCosmWasmClient,
    sender: string,
  ): AbstractAccountClient {
    const signingAbstract = this.abstract.connectSigningClient(
      signingClient,
      sender,
    )
    return this.connectAbstractClient(signingAbstract)
  }
}

interface IAbstractAccountClient extends IAbstractAccountQueryClient {
  abstract: AbstractClient
}

/**
 * Execute a message on a module.
 */
interface ExecuteOnModule {
  moduleId: string
  moduleType?: ModuleType
  execMsg: ContractMsg
}

const PROXY_MODULE_ID = 'abstract:proxy'

/**
 * The AbstractAccountClient class extends the AbstractAccountQueryClient class and provides
 * additional functionality to interact with a specific Account deployed on Abstract.
 *
 * Unlike AbstractAccountQueryClient, AbstractAccountClient can execute transactions.
 *
 * This class should be used when write operations (transactions) need to be performed for the
 * account.
 *
 * @property abstract - An instance of AbstractClient.
 * @property sender - The sender address associated with the signing account.
 */
export class AbstractAccountClient extends AbstractAccountQueryClient {
  declare abstract: AbstractClient
  sender: string

  constructor(base: IAbstractAccountClient) {
    super(base)
    const { abstract } = base
    const { sender } = abstract
    this.sender = sender
    this.abstract = abstract
  }

  /**
   * Get the manager executable client.
   */
  get managerClient(): ManagerClient {
    return new ManagerClient(
      this.abstract.client,
      this.sender,
      this.managerAddress,
    )
  }

  /**
   * Get the proxy client.
   */
  get proxyClient(): ProxyClient {
    return new ProxyClient(this.abstract.client, this.sender, this.proxyAddress)
  }

  public AccountMsgComposer(sender?: string): ManagerMessageComposer {
    return new ManagerMessageComposer(
      sender || this.sender,
      this.managerAddress,
    )
  }

  public proxyMsgComposer(sender?: string): ProxyMessageComposer {
    return new ProxyMessageComposer(sender || this.sender, this.proxyAddress)
  }

  /**
   * Retrieve the {@link SigningCosmWasmClient} associated with the account.
   */
  public get client(): SigningCosmWasmClient {
    return this.abstract.client
  }

  /**
   * Get the messages for depositing assets into the account.
   */
  public depositMsgs(toDeposit: AssetList): EncodedMsg[] {
    return toDeposit.transferMsgs(this.sender, this.depositAddress)
  }

  /**
   * Deposit assets into the account.
   */
  public async deposit(
    toDeposit: AssetList,
    fee: StdFee | 'auto' | number,
    memo?: string,
  ) {
    const depositMsgs = this.depositMsgs(toDeposit)
    return this.client.signAndBroadcast(this.sender, depositMsgs, fee, memo)
  }

  /**
   * Deposit ANS assets into the Account.
   */
  public async depositAnsAssets(
    assets: AnsAssetList,
    fee: StdFee | 'auto' | number,
    memo?: string,
  ) {
    const resolved = await assets.resolve(this.abstract)
    return this.deposit(resolved, fee, memo)
  }

  /**
   * Get the withdraw messages for the given assets.
   * @param toWithdraw - The assets to withdraw.
   * @param recipient - The recipient for the assets.
   * @param funds - Optional. Any funds to send with the message.
   */
  public withdrawMsgs(
    toWithdraw: AssetList,
    recipient: string,
    funds?: Coin[],
  ): EncodedMsg[] {
    const transferMsgs = toWithdraw.cosmosTransferMsgs(
      this.depositAddress,
      recipient,
    )

    // what the proxy executes
    return [this.executeMsg(transferMsgs, funds)]
  }

  /**
   * Withdraw assets from the Account. Must be called by the owner.
   */
  public async withdraw(
    toWithdraw: AssetList,
    recipient: string,
    fee: StdFee | 'auto' | number,
    memo?: string,
    funds?: Coin[],
  ) {
    const withdrawMsgs = this.withdrawMsgs(toWithdraw, recipient, funds)
    return this.client.signAndBroadcast(this.sender, withdrawMsgs, fee, memo)
  }

  /**
   * Build an execute message for a specific module.
   *
   * This method takes a module ID and an execution message of generic type ContractMsg and
   * converts it into a message which is intended to be executed on the specified module.
   *
   * Note: This method does not actually send the message; it merely prepares it to be sent.
   *
   * @param moduleId - The ID of the module on which the message should be executed.
   * @param execMsg - The message to be executed.
   *
   * @returns A ContractMsg representing the execution message for the specified module.
   *
   * @typeparam T - Represents the type of the execution message, which should extend from
   *   ContractMsg.
   */
  public buildExecuteOnModuleMsg<T extends ContractMsg>(
    moduleId: string,
    execMsg: T,
  ): ContractMsg {
    return ManagerExecuteMsgBuilder.execOnModule({
      execMsg: jsonToBinary(execMsg),
      moduleId,
    })
  }

  /**
   * This constructs an execution message that is tailored to the specified module and its
   * type. It can handle 'app' and 'adapter' module types, with the message just being passed on in
   * the default case.
   *
   * @param execMsg the execution message
   * @param moduleType the type of the module
   */
  private wrapModuleExecMsg(execMsg: ContractMsg, moduleType?: ModuleType) {
    return match(moduleType)
      .with('app', () => AppExecuteMsgFactory.executeApp(execMsg))
      .with('adapter', () =>
        AdapterExecuteMsgFactory.executeAdapter({ request: execMsg }),
      )
      .otherwise(() => execMsg)
  }

  /**
   * Compose an execute message for a specific module, given its type.
   *
   * @param moduleId - The ID of the module on which the message should be executed.
   * @param moduleType - The type of the module.
   * @param execMsg - The execution message.
   * @param funds - Optional. The funds involved in the execution.
   *
   * @returns An encoded object representing the execution message for the specified module.
   *
   * @see {AppExecuteMsgFactory} for building app requests
   * @see {AdapterExecuteMsgFactory} for building adapter requests
   */
  public composeExecuteOnModule(
    { moduleId, moduleType, execMsg }: ExecuteOnModule,
    funds?: Coin[],
  ): MsgExecuteContractEncodeObject {
    const moduleExecMsg = this.wrapModuleExecMsg(execMsg, moduleType)

    return this.AccountMsgComposer().execOnModule(
      {
        execMsg: jsonToBinary(moduleExecMsg),
        moduleId,
      },
      funds,
    )
  }

  /**
   * Execute a message on a specific module, given its type.
   *
   * @param moduleId - The ID of the module on which the message should be executed.
   * @param moduleType - The type of the module.
   * @param execMsg - The execution message.
   * @param funds - Optional. The funds involved in the execution.
   *
   * @returns A Promise resolving to the result of the execution.
   *
   * @see {AppExecuteMsgFactory} for building app requests
   * @see {AdapterExecuteMsgFactory} for building adapter requests
   */
  public async executeOnModule(
    { moduleId, moduleType, execMsg }: ExecuteOnModule,
    funds?: Coin[],
  ): Promise<ExecuteResult> {
    const moduleExecMsg = this.wrapModuleExecMsg(execMsg, moduleType)

    return await this.managerClient.execOnModule(
      {
        execMsg: jsonToBinary(moduleExecMsg),
        moduleId,
      },
      'auto',
      undefined,
      funds,
    )
  }

  /**
   * Build a message for executing an action on the Account.
   * @param msgs - The messages to execute.
   * @param funds
   */
  public executeMsg(
    msgs: CosmosMsgForEmpty | CosmosMsgForEmpty[],
    funds?: Coin[],
  ): MsgExecuteContractEncodeObject {
    return this.composeExecuteOnModule(
      {
        moduleId: PROXY_MODULE_ID,
        moduleType: 'account_base',
        execMsg: ProxyExecuteMsgBuilder.moduleAction({ msgs: [msgs].flat() }),
      },
      funds,
    )
  }

  /**
   * Execute messages on the Account.
   * @param msgs - The messages to execute.
   * @param funds
   */
  public async execute(
    msgs: CosmosMsgForEmpty | CosmosMsgForEmpty[],
    funds?: Coin[],
  ): Promise<ExecuteResult> {
    return await this.executeOnModule(
      {
        moduleId: PROXY_MODULE_ID,
        moduleType: 'account_base',
        execMsg: ProxyExecuteMsgBuilder.moduleAction({ msgs: [msgs].flat() }),
      },
      funds,
    )
  }

  /**
   * Claim a namespace on the account.
   * This namespace allows you to propose modules to the module marketplace.
   * @param namespace
   */
  public async claimNamespace(namespace: string): Promise<ExecuteResult> {
    return await this.abstract.registryClient.claimNamespace({
      accountId: this.accountId.into(),
      namespace,
    })
  }

  /**
   * Create a subaccount on this account.
   */
  public async createSubAccount(
    params: Parameters<ManagerClient['createSubAccount']>[0],
  ): Promise<ExecuteResult> {
    return await this.managerClient.createSubAccount(params)
  }

  /**
   * Release a namespace from the account.
   * This relinquishes your control over the namespace and allows other Accounts to claim it.
   */
  public async releaseNamespace(): Promise<ExecuteResult> {
    const namespace = await this.getNamespace()
    if (!namespace) {
      throw new Error('No namespace found')
    }
    return await this.abstract.registryClient.removeNamespaces({
      namespaces: [namespace],
    })
  }

  /**
   * Upgrade a query client to a signing client.
   *
   * This method takes an AbstractAccountQueryClient and upgrades it to an AbstractAccountClient,
   * which has signing capabilities.
   *
   * @param queryClient - The AbstractAccountQueryClient to be upgraded.
   * @param abstract - The AbstractClient to be associated with the new AbstractAccountClient.
   *
   * @returns A new AbstractAccountClient, upgraded from the provided AbstractAccountQueryClient.
   */
  public static fromQueryClient(
    queryClient: AbstractAccountQueryClient,
    abstract: AbstractClient,
  ) {
    return new AbstractAccountClient({ ...queryClient, abstract })
  }
}
