import {
  ABSTRACT_CONSTANTS,
  AccountId,
  AdapterQueryMsgBuilder,
  AppQueryMsgFactory,
  ContractMsg,
  ModuleType,
  accountIdToParameter,
  sequenceToLocalAccountId,
} from '@abstract-money/core'
import { type SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { type JsonObject } from '@cosmjs/cosmwasm-stargate/build/modules'
import { P, match } from 'ts-pattern'
import {
  AccountClient,
  AccountQueryClient,
  AccountTypes,
} from '../../codegen/abstract'
import { type AbstractClient, type AbstractQueryClient } from './AbstractClient'

type AccountModuleInfo = AccountTypes.AccountModuleInfo
type GovernanceDetails = AccountTypes.GovernanceDetailsForString

interface IAbstractAccountQueryClient {
  abstract: AbstractQueryClient
  accountId: AccountId
  accountAddress: string
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
 * @property accountAddress - The manager address associated with the account.
 * @property accountAddress - The proxy address associated with the account.
 */
export class AbstractAccountQueryClient implements IAbstractAccountQueryClient {
  abstract: AbstractQueryClient
  accountId: AccountId
  accountAddress: string
  _owner?: string | null

  constructor({
    abstract,
    accountId,
    accountAddress,
  }: IAbstractAccountQueryClient) {
    this.accountId = accountId
    this.abstract = abstract
    this.accountAddress = accountAddress
  }

  /**
   * Load the abstract account client given the **accountId** and the **abstractClient**.
   * @param abstractClient Abstract client connected to the chain.
   * @param accountId The account id.
   */
  public static async load(
    abstractClient: AbstractQueryClient,
    accountId: AccountId,
  ): Promise<AbstractAccountQueryClient> {
    const { account } = await abstractClient.registryQueryClient.account({
      accountId: accountIdToParameter(accountId),
    })

    return new AbstractAccountQueryClient({
      abstract: abstractClient,
      accountId,
      accountAddress: account,
    })
  }

  /**
   * Get the manager query client.
   */
  get accountQueryClient(): AccountQueryClient {
    return new AccountQueryClient(this.abstract.client, this.accountAddress)
  }

  /**
   * Retrieve the account sequence.
   */
  get accountSequence(): number {
    return this.accountId.seq
  }

  /**
   * Retrieve the deposit address.
   */
  get depositAddress(): string {
    return this.accountAddress
  }

  /**
   * Load the module information for those installed on this Account.
   */
  public async getModules(): Promise<AccountModuleInfo[]> {
    const { module_infos: modules } = await this.accountQueryClient.moduleInfos(
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
    return this.accountQueryClient
      .subAccountIds({
        limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
      })
      .then(({ sub_accounts }) => sub_accounts)
  }

  /**
   * Retrieve the list of subaccount ids for this Account.
   * @returns the list of subaccount ids.
   */
  public async getSubAccountIds(): Promise<AccountId[]> {
    const chainName = await this.abstract.getChainName()
    return this.accountQueryClient
      .subAccountIds({
        limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
      })
      .then(({ sub_accounts }) => sub_accounts)
      .then((subAccounts) =>
        subAccounts.map((seq) =>
          sequenceToLocalAccountId({ chainName, sequence: seq }),
        ),
      )
  }

  /**
   * Retrieve the list of sub-accounts for this Account.
   */
  public async getSubAccounts(): Promise<AbstractAccountQueryClient[]> {
    const subAccountIds = await this.getSubAccountSequences()
    const chainName = await this.abstract.getChainName()
    return Promise.all(
      subAccountIds.map((subAccountId) =>
        this.abstract.loadAccount(
          sequenceToLocalAccountId({ chainName, sequence: subAccountId }),
        ),
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
      .namespaces({ accounts: [accountIdToParameter(this.accountId)] })
      .then((x) => x.namespaces[0]?.[0])

    return namespace ?? null
  }

  /**
   * Return the owner of the Account.
   *
   * @param invalidateCache If true, refetch the owner from the accountQueryClient.
   * @returns The owner address, or null if no owner is set.
   */
  public async getOwner(invalidateCache?: boolean): Promise<string | null> {
    if (invalidateCache || this._owner === undefined) {
      const owner = (await this.accountQueryClient
        .ownership()
        .then(({ owner }) => owner)) as unknown

      const governance = owner as unknown as GovernanceDetails

      this._owner = match(governance)
        .with({ monarchy: { monarch: P.select() } }, (monarch) => monarch)
        .with({ sub_account: { account: P.select() } }, (proxy) => proxy)
        .with({ renounced: {} }, () => null)
        .with({ n_f_t: { collection_addr: P.select() } }, (col) => col)
        .with({ external: { governance_address: P.select() } }, (ext) => ext)
        .otherwise((e) => {
          console.warn(
            `Unknown governance type for ${
              this.accountAddress
            }: ${JSON.stringify(e)}`,
          )
          return JSON.stringify(e)
        })
    }

    return this._owner ?? null
  }

  /**
   * Given the **moduleId**, get the address of the module installed on this Account.
   * @param moduleId
   * @returns null if not installed
   */
  public async getModuleAddress(moduleId: string): Promise<string | null> {
    return await this.accountQueryClient
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
  get accountClient(): AccountClient {
    return new AccountClient(
      this.abstract.client,
      this.sender,
      this.accountAddress,
    )
  }

  /**
   * Retrieve the {@link SigningCosmWasmClient} associated with the account.
   */
  public get client(): SigningCosmWasmClient {
    return this.abstract.client
  }

  // /**
  //  * Get the messages for depositing assets into the account.
  //  */
  // public depositMsgs(toDeposit: AssetList): EncodedMsg[] {
  //   return toDeposit.transferMsgs(this.sender, this.depositAddress)
  // }
  // //
  // // /**
  // //  * Deposit assets into the account.
  // //  */
  // // public async deposit(
  // //   toDeposit: AssetList,
  // //   fee: StdFee | 'auto' | number,
  // //   memo?: string,
  // // ) {
  // //   const depositMsgs = this.depositMsgs(toDeposit)
  // //   return this.client.signAndBroadcast(this.sender, depositMsgs, fee, memo)
  // // }

  // /**
  //  * Deposit ANS assets into the Account.
  //  */
  // public async depositAnsAssets(
  //   assets: AnsAssetList,
  //   fee: StdFee | 'auto' | number,
  //   memo?: string,
  // ) {
  //   const resolved = await assets.resolve(this.abstract)
  //   return this.deposit(resolved, fee, memo)
  // }
  //
  // /**
  //  * Get the withdraw messages for the given assets.
  //  * @param toWithdraw - The assets to withdraw.
  //  * @param recipient - The recipient for the assets.
  //  * @param funds - Optional. Any funds to send with the message.
  //  */
  // public withdrawMsgs(
  //   toWithdraw: AssetList,
  //   recipient: string,
  //   funds?: Coin[],
  // ): EncodedMsg[] {
  //   const transferMsgs = toWithdraw.cosmosTransferMsgs(
  //     this.depositAddress,
  //     recipient,
  //   )
  //
  //   // what the proxy executes
  //   return [this.executeMsg(transferMsgs, funds)]
  // }

  // /**
  //  * Compose an execute message for a specific module, given its type.
  //  *
  //  * @param moduleId - The ID of the module on which the message should be executed.
  //  * @param moduleType - The type of the module.
  //  * @param execMsg - The execution message.
  //  * @param funds - Optional. The funds involved in the execution.
  //  *
  //  * @returns An encoded object representing the execution message for the specified module.
  //  *
  //  * @see {AppExecuteMsgFactory} for building app requests
  //  * @see {AdapterExecuteMsgFactory} for building adapter requests
  //  */
  // public composeExecuteOnModule(
  //   { moduleId, moduleType, execMsg }: ExecuteOnModule,
  //   funds?: Coin[],
  // ): MsgExecuteContractEncodeObject {
  //   const moduleExecMsg = this.wrapModuleExecMsg(execMsg, moduleType)
  //
  //   return this.managerMsgComposer().executeOnModule(
  //     {
  //       execMsg: jsonToBinary(moduleExecMsg),
  //       moduleId,
  //     },
  //     funds,
  //   )
  // }

  // /**
  //  * Build a message for executing an action on the Account.
  //  * @param msgs - The messages to execute.
  //  * @param funds
  //  */
  // public executeMsg(
  //   msgs: CosmosMsgForEmpty | CosmosMsgForEmpty[],
  //   funds?: Coin[],
  // ): MsgExecuteContractEncodeObject {
  //   return this.composeExecuteOnModule(
  //     {
  //       moduleId: PROXY_MODULE_ID,
  //       moduleType: 'account',
  //       execMsg: AccountExecuteMsgBuilder.moduleAction({ msgs: [msgs].flat() }),
  //     },
  //     funds,
  //   )
  // }

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
