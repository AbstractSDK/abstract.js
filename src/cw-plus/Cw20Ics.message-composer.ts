/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AdminResponse, AllowedResponse, Amount, Uint128, ChannelResponse, Coin, Cw20Coin, ChannelInfo, IbcEndpoint, ConfigResponse, ExecuteMsg, Binary, Cw20ReceiveMsg, TransferMsg, AllowMsg, InitMsg, ListAllowedResponse, AllowedInfo, ListChannelsResponse, PortResponse, QueryMsg } from "./Cw20Ics.types";
export interface Cw20IcsMessage {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  transfer: ({
    channel,
    remoteAddress,
    timeout
  }: {
    channel: string;
    remoteAddress: string;
    timeout?: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  allow: ({
    contract,
    gasLimit
  }: {
    contract: string;
    gasLimit?: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAdmin: ({
    admin
  }: {
    admin: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Cw20IcsMessageComposer implements Cw20IcsMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.transfer = this.transfer.bind(this);
    this.allow = this.allow.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
  }

  receive = ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            amount,
            msg,
            sender
          }
        })),
        funds
      })
    };
  };
  transfer = ({
    channel,
    remoteAddress,
    timeout
  }: {
    channel: string;
    remoteAddress: string;
    timeout?: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer: {
            channel,
            remote_address: remoteAddress,
            timeout
          }
        })),
        funds
      })
    };
  };
  allow = ({
    contract,
    gasLimit
  }: {
    contract: string;
    gasLimit?: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          allow: {
            contract,
            gas_limit: gasLimit
          }
        })),
        funds
      })
    };
  };
  updateAdmin = ({
    admin
  }: {
    admin: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_admin: {
            admin
          }
        })),
        funds
      })
    };
  };
}