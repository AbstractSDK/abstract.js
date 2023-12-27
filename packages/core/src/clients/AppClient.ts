/**
 * This file was automatically generated by @abstract-money/ts-codegen@0.28.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @abstract-money/ts-codegen generate command to regenerate this file.
 */

import { Coin, StdFee } from '@cosmjs/amino'
import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ContractMsg } from '.'
import { AppExecuteMsg, AppExecuteMsgFactory } from '../utils'
import {
  AbstractAccountClient,
  AbstractAccountQueryClient,
} from './AbstractAccountClient'
import { AbstractClient, AbstractQueryClient } from './AbstractClient'
import { AbstractAccountId } from './objects/AbstractAccountId'

export interface IAppQueryClient<TQueryMsg extends ContractMsg> {
  moduleId: string
  accountQueryClient: AbstractAccountQueryClient
  _moduleAddress: string | undefined
  connectSigningClient: (
    signingClient: SigningCosmWasmClient,
    address: string,
  ) => AppClient<TQueryMsg, ContractMsg>
  getAddress: () => Promise<string | undefined>
  _query: (queryMsg: TQueryMsg) => Promise<unknown>
}

/**
 *
 */
export class AppQueryClient<TQueryMsg extends ContractMsg>
  implements IAppQueryClient<TQueryMsg>
{
  accountQueryClient: AbstractAccountQueryClient
  moduleId: string
  _moduleAddress: string | undefined

  constructor({
    abstractQueryClient,
    accountId,
    managerAddress,
    proxyAddress,
    moduleId,
  }: {
    abstractQueryClient: AbstractQueryClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }) {
    this.accountQueryClient = new AbstractAccountQueryClient({
      abstract: abstractQueryClient,
      accountId,
      managerAddress,
      proxyAddress,
    })
    this.moduleId = moduleId
    this._query = this._query.bind(this)
    this.getAddress = this.getAddress.bind(this)
    this.connectSigningClient = this.connectSigningClient.bind(this)
  }

  getAddress = async (): Promise<string> => {
    if (!this._moduleAddress) {
      const address = await this.accountQueryClient.getModuleAddress(
        this.moduleId,
      )
      if (!address) throw new Error('Module not installed')
      this._moduleAddress = address
    }

    return this._moduleAddress!
  }
  connectSigningClient = (
    signingClient: SigningCosmWasmClient,
    address: string,
  ): AppClient<TQueryMsg, ContractMsg> => {
    return new AppClient({
      accountId: this.accountQueryClient.accountId,
      managerAddress: this.accountQueryClient.managerAddress,
      proxyAddress: this.accountQueryClient.proxyAddress,
      moduleId: this.moduleId,
      abstractClient: this.accountQueryClient.abstract.connectSigningClient(
        signingClient,
        address,
      ),
    })
  }
  _query = async (queryMsg: TQueryMsg): Promise<any> => {
    return this.accountQueryClient.queryModule({
      moduleId: this.moduleId,
      moduleType: 'app',
      queryMsg,
    })
  }
}

export interface IAppClient<
  TQueryMsg extends ContractMsg,
  TExecMsg extends ContractMsg,
> extends IAppQueryClient<TQueryMsg> {
  accountClient: AbstractAccountClient
  _execute: (
    msg: TExecMsg,
    fee: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
}

export class AppClient<
    TQueryMsg extends ContractMsg,
    TExecMsg extends ContractMsg,
  >
  extends AppQueryClient<TQueryMsg>
  implements IAppClient<TQueryMsg, TExecMsg>
{
  accountClient: AbstractAccountClient

  constructor({
    abstractClient,
    accountId,
    managerAddress,
    proxyAddress,
    moduleId,
  }: {
    abstractClient: AbstractClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }) {
    super({
      abstractQueryClient: abstractClient,
      accountId,
      managerAddress,
      proxyAddress,
      moduleId,
    })
    this.accountClient = AbstractAccountClient.fromQueryClient(
      this.accountQueryClient,
      abstractClient,
    )
    this._execute = this._execute.bind(this)
  }

  /**
   * Upgrade a query client to a signing client.
   *
   * This method takes an AbstractAccountQueryClient and upgrades it to an AbstractAccountClient,
   * which has signing capabilities.
   *
   * @param queryClient - The AbstractAccountQueryClient to be upgraded.
   * @param client - The AbstractClient to be associated with the new AbstractAccountClient.
   *
   * @returns A new AbstractAccountClient, upgraded from the provided AbstractAccountQueryClient.
   */
  public static fromQueryClient<TQueryMsg extends ContractMsg>(
    queryClient: AppQueryClient<TQueryMsg>,
    client: AbstractClient,
  ) {
    return new AppClient({
      ...queryClient.accountQueryClient,
      ...queryClient,
      abstractClient: client,
    })
  }

  _execute = async (
    msg: TExecMsg,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    const moduleMsg: AppExecuteMsg<TExecMsg> =
      AppExecuteMsgFactory.executeApp(msg)
    return await this.accountClient.abstract.client.execute(
      this.accountClient.sender,
      await this.getAddress(),
      moduleMsg,
      fee,
      memo,
      _funds,
    )
  }
}
