/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr, AddOnState, Memory, BaseResponse, ExecuteMsg, AddOnExecuteMsg, Uint128, Binary, AssetInfoBaseForString, Decimal, Cw20ReceiveMsg, AssetBaseForString, InstantiateMsg, AddOnInstantiateMsg, QueryMsg, AddOnQueryMsg, StateResponse } from "./Etf.types";
export interface EtfReadOnlyInterface {
  contractAddress: string;
  queryBase: () => Promise<BaseResponse>;
  state: () => Promise<StateResponse>;
}
export class EtfQueryClient implements EtfReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.queryBase = this.queryBase.bind(this);
    this.state = this.state.bind(this);
  }

  queryBase = async (): Promise<BaseResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      base: {}
    });
  };
  state = async (): Promise<StateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      state: {}
    });
  };
}
export interface EtfInterface extends EtfReadOnlyInterface {
  contractAddress: string;
  sender: string;
  base: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  provideLiquidity: ({
    asset
  }: {
    asset: AssetBaseForString;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updatePool: ({
    assetsToAdd,
    assetsToRemove,
    depositAsset
  }: {
    assetsToAdd: string[];
    assetsToRemove: string[];
    depositAsset?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  import: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setFee: ({
    fee
  }: {
    fee: Decimal;
  }, txfee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class EtfClient extends EtfQueryClient implements EtfInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.base = this.base.bind(this);
    this.receive = this.receive.bind(this);
    this.provideLiquidity = this.provideLiquidity.bind(this);
    this.updatePool = this.updatePool.bind(this);
    this.import = this.import.bind(this);
    this.setFee = this.setFee.bind(this);
  }

  base = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      base: {}
    }, fee, memo, funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  provideLiquidity = async ({
    asset
  }: {
    asset: AssetBaseForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      provide_liquidity: {
        asset
      }
    }, fee, memo, funds);
  };
  updatePool = async ({
    assetsToAdd,
    assetsToRemove,
    depositAsset
  }: {
    assetsToAdd: string[];
    assetsToRemove: string[];
    depositAsset?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_pool: {
        assets_to_add: assetsToAdd,
        assets_to_remove: assetsToRemove,
        deposit_asset: depositAsset
      }
    }, fee, memo, funds);
  };
  import = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      import: {}
    }, fee, memo, funds);
  };
  setFee = async ({
    fee
  }: {
    fee: Decimal;
  }, txFee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_fee: {
        fee
      }
    }, txFee, memo, funds);
  };
}
