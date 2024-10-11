/**
* This file was automatically generated by @abstract-money/ts-codegen@0.37.0-beta-2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { CamelCasedProperties } from "type-fest";
import { SigningCosmWasmClient, ExecuteResult } from "@abstract-money/cli/cosmjs";
import { AccountPublicClient, AccountWalletClient, AppExecuteMsg, AppExecuteMsgFactory, AdapterExecuteMsg, AdapterExecuteMsgFactory } from "@abstract-money/core";
import { StdFee, Coin } from "@abstract-money/cli/cosmjs";
import { Decimal, InstantiateMsg, ExecuteMsg, AssetEntry, AccountTrace, ChainName, Uint128, AccountOdds, AccountId, Bet, AnsAsset, QueryMsg, MigrateMsg, Addr, BetsResponse, ConfigResponse, ListOddsResponse, RoundStatus, RoundsResponse, RoundResponse, OddsResponse } from "./Betting.types";
import { BettingQueryMsgBuilder, BettingExecuteMsgBuilder } from "./Betting.message-builder";
export interface IBettingAppQueryClient {
  moduleId: string;
  accountPublicClient: AccountPublicClient;
  _moduleAddress: string | undefined;
  round: (params: CamelCasedProperties<Extract<QueryMsg, {
    round: unknown;
  }>["round"]>) => Promise<RoundResponse>;
  listRounds: (params: CamelCasedProperties<Extract<QueryMsg, {
    list_rounds: unknown;
  }>["list_rounds"]>) => Promise<RoundsResponse>;
  odds: (params: CamelCasedProperties<Extract<QueryMsg, {
    odds: unknown;
  }>["odds"]>) => Promise<OddsResponse>;
  listOdds: (params: CamelCasedProperties<Extract<QueryMsg, {
    list_odds: unknown;
  }>["list_odds"]>) => Promise<ListOddsResponse>;
  config: () => Promise<ConfigResponse>;
  bets: (params: CamelCasedProperties<Extract<QueryMsg, {
    bets: unknown;
  }>["bets"]>) => Promise<BetsResponse>;
  getAddress: () => Promise<string>;
}
export class BettingAppQueryClient implements IBettingAppQueryClient {
  accountPublicClient: AccountPublicClient;
  moduleId: string;
  _moduleAddress: string | undefined;

  constructor({
    accountPublicClient,
    moduleId
  }: {
    accountPublicClient: AccountPublicClient;
    moduleId: string;
  }) {
    this.accountPublicClient = accountPublicClient;
    this.moduleId = moduleId;
    this.round = this.round.bind(this);
    this.listRounds = this.listRounds.bind(this);
    this.odds = this.odds.bind(this);
    this.listOdds = this.listOdds.bind(this);
    this.config = this.config.bind(this);
    this.bets = this.bets.bind(this);
  }

  round = async (params: CamelCasedProperties<Extract<QueryMsg, {
    round: unknown;
  }>["round"]>): Promise<RoundResponse> => {
    return this._query(BettingQueryMsgBuilder.round(params));
  };
  listRounds = async (params: CamelCasedProperties<Extract<QueryMsg, {
    list_rounds: unknown;
  }>["list_rounds"]>): Promise<RoundsResponse> => {
    return this._query(BettingQueryMsgBuilder.listRounds(params));
  };
  odds = async (params: CamelCasedProperties<Extract<QueryMsg, {
    odds: unknown;
  }>["odds"]>): Promise<OddsResponse> => {
    return this._query(BettingQueryMsgBuilder.odds(params));
  };
  listOdds = async (params: CamelCasedProperties<Extract<QueryMsg, {
    list_odds: unknown;
  }>["list_odds"]>): Promise<ListOddsResponse> => {
    return this._query(BettingQueryMsgBuilder.listOdds(params));
  };
  config = async (): Promise<ConfigResponse> => {
    return this._query(BettingQueryMsgBuilder.config());
  };
  bets = async (params: CamelCasedProperties<Extract<QueryMsg, {
    bets: unknown;
  }>["bets"]>): Promise<BetsResponse> => {
    return this._query(BettingQueryMsgBuilder.bets(params));
  };
  getAddress = async (): Promise<string> => {
    if (!this._moduleAddress) {
      const address = await this.accountPublicClient.getModuleAddress({
        id: this.moduleId
      });

      if (address === null) {
        throw new Error(`Module ${this.moduleId} not installed`);
      }

      this._moduleAddress = address;
    }

    return this._moduleAddress!;
  };
  _query = async (queryMsg: QueryMsg): Promise<any> => {
    return this.accountPublicClient.queryModule({
      moduleId: this.moduleId,
      moduleType: "app",
      queryMsg
    });
  };
}
export interface IBettingAppClient extends IBettingAppQueryClient {
  accountWalletClient: AccountWalletClient;
  createRound: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    create_round: unknown;
  }>["create_round"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  register: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    register: unknown;
  }>["register"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateAccounts: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_accounts: unknown;
  }>["update_accounts"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  placeBet: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    place_bet: unknown;
  }>["place_bet"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  distributeWinnings: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    distribute_winnings: unknown;
  }>["distribute_winnings"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  closeRound: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    close_round: unknown;
  }>["close_round"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
}
export class BettingAppClient extends BettingAppQueryClient implements IBettingAppClient {
  accountWalletClient: AccountWalletClient;

  constructor({
    accountPublicClient,
    accountWalletClient,
    moduleId
  }: {
    accountPublicClient: AccountPublicClient;
    accountWalletClient: AccountWalletClient;
    moduleId: string;
  }) {
    super({
      accountPublicClient,
      moduleId
    });
    this.accountWalletClient = accountWalletClient;
    this.createRound = this.createRound.bind(this);
    this.register = this.register.bind(this);
    this.updateAccounts = this.updateAccounts.bind(this);
    this.placeBet = this.placeBet.bind(this);
    this.distributeWinnings = this.distributeWinnings.bind(this);
    this.closeRound = this.closeRound.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }

  createRound = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    create_round: unknown;
  }>["create_round"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.createRound(params), fee_, memo_, funds_);
  };
  register = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    register: unknown;
  }>["register"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.register(params), fee_, memo_, funds_);
  };
  updateAccounts = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_accounts: unknown;
  }>["update_accounts"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.updateAccounts(params), fee_, memo_, funds_);
  };
  placeBet = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    place_bet: unknown;
  }>["place_bet"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.placeBet(params), fee_, memo_, funds_);
  };
  distributeWinnings = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    distribute_winnings: unknown;
  }>["distribute_winnings"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.distributeWinnings(params), fee_, memo_, funds_);
  };
  closeRound = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    close_round: unknown;
  }>["close_round"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.closeRound(params), fee_, memo_, funds_);
  };
  updateConfig = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(BettingExecuteMsgBuilder.updateConfig(params), fee_, memo_, funds_);
  };
  _execute = async (msg: ExecuteMsg, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    const signingCwClient = await this.accountWalletClient.getSigningCosmWasmClient();
    const sender = await this.accountWalletClient.getSenderAddress();
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppExecuteMsgFactory.executeApp(msg);
    return await signingCwClient.execute(sender, await this.getAddress(), moduleMsg, fee_, memo_, funds_);
  };
}