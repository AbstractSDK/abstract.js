/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, ApiAddressResponse, ContractVersion, ApiAddressesResponse, Uint64, CodeIdResponse, CodeIdsResponse, ConfigResponse, ExecuteMsg, InstantiateMsg, ModuleInfo, OsCoreResponse, Core, QueryMsg } from "./VersionControl.types";
export interface VersionControlMessage {
  contractAddress: string;
  sender: string;
  addCodeId: ({
    codeId,
    module,
    version
  }: {
    codeId: number;
    module: string;
    version: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeCodeId: ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addApi: ({
    address,
    module,
    version
  }: {
    address: string;
    module: string;
    version: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeApi: ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addOs: ({
    managerAddress,
    osId,
    proxyAddress
  }: {
    managerAddress: string;
    osId: number;
    proxyAddress: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setAdmin: ({
    newAdmin
  }: {
    newAdmin: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setFactory: ({
    newFactory
  }: {
    newFactory: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class VersionControlMessageComposer implements VersionControlMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.addCodeId = this.addCodeId.bind(this);
    this.removeCodeId = this.removeCodeId.bind(this);
    this.addApi = this.addApi.bind(this);
    this.removeApi = this.removeApi.bind(this);
    this.addOs = this.addOs.bind(this);
    this.setAdmin = this.setAdmin.bind(this);
    this.setFactory = this.setFactory.bind(this);
  }

  addCodeId = ({
    codeId,
    module,
    version
  }: {
    codeId: number;
    module: string;
    version: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_code_id: {
            code_id: codeId,
            module,
            version
          }
        })),
        funds
      })
    };
  };
  removeCodeId = ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_code_id: {
            module,
            version
          }
        })),
        funds
      })
    };
  };
  addApi = ({
    address,
    module,
    version
  }: {
    address: string;
    module: string;
    version: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_api: {
            address,
            module,
            version
          }
        })),
        funds
      })
    };
  };
  removeApi = ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_api: {
            module,
            version
          }
        })),
        funds
      })
    };
  };
  addOs = ({
    managerAddress,
    osId,
    proxyAddress
  }: {
    managerAddress: string;
    osId: number;
    proxyAddress: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_os: {
            manager_address: managerAddress,
            os_id: osId,
            proxy_address: proxyAddress
          }
        })),
        funds
      })
    };
  };
  setAdmin = ({
    newAdmin
  }: {
    newAdmin: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_admin: {
            new_admin: newAdmin
          }
        })),
        funds
      })
    };
  };
  setFactory = ({
    newFactory
  }: {
    newFactory: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_factory: {
            new_factory: newFactory
          }
        })),
        funds
      })
    };
  };
}