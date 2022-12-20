/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { Coin } from '@cosmjs/amino'
import { MsgExecuteContractEncodeObject } from 'cosmwasm'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { toUtf8 } from '@cosmjs/encoding'
import {
  InstantiateMsg,
  ExecuteMsg,
  Binary,
  ModuleVersion,
  ModuleReference,
  Addr,
  ModuleInfo,
  Module,
  CallbackMsg,
  QueryMsg,
  MigrateMsg,
  Uint64,
  ConfigResponse,
  InfoResponse,
  OsInfo,
  ModuleAddressesResponse,
  ModuleInfosResponse,
  ManagerModuleInfo,
  ContractVersion,
  ModuleVersionsResponse,
} from './Manager.types'
export interface ManagerMessage {
  contractAddress: string
  sender: string
  execOnModule: (
    {
      execMsg,
      moduleId,
    }: {
      execMsg: Binary
      moduleId: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  updateModuleAddresses: (
    {
      toAdd,
      toRemove,
    }: {
      toAdd?: string[][][]
      toRemove?: string[]
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  installModule: (
    {
      initMsg,
      module,
    }: {
      initMsg?: Binary
      module: ModuleInfo
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  registerModule: (
    {
      module,
      moduleAddr,
    }: {
      module: Module
      moduleAddr: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  removeModule: (
    {
      moduleId,
    }: {
      moduleId: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  upgrade: (
    {
      modules,
    }: {
      modules: ModuleInfo[][]
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  updateInfo: (
    {
      description,
      link,
      name,
    }: {
      description?: string
      link?: string
      name?: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  setRoot: (
    {
      governanceType,
      root,
    }: {
      governanceType?: string
      root: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  suspendOs: (
    {
      newStatus,
    }: {
      newStatus: boolean
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  enableIBC: (
    {
      newStatus,
    }: {
      newStatus: boolean
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  callback: (funds?: Coin[]) => MsgExecuteContractEncodeObject
}
export class ManagerMessageComposer implements ManagerMessage {
  sender: string
  contractAddress: string

  constructor(sender: string, contractAddress: string) {
    this.sender = sender
    this.contractAddress = contractAddress
    this.execOnModule = this.execOnModule.bind(this)
    this.updateModuleAddresses = this.updateModuleAddresses.bind(this)
    this.installModule = this.installModule.bind(this)
    this.registerModule = this.registerModule.bind(this)
    this.removeModule = this.removeModule.bind(this)
    this.upgrade = this.upgrade.bind(this)
    this.updateInfo = this.updateInfo.bind(this)
    this.setRoot = this.setRoot.bind(this)
    this.suspendOs = this.suspendOs.bind(this)
    this.enableIBC = this.enableIBC.bind(this)
    this.callback = this.callback.bind(this)
  }

  execOnModule = (
    {
      execMsg,
      moduleId,
    }: {
      execMsg: Binary
      moduleId: string
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            exec_on_module: {
              exec_msg: execMsg,
              module_id: moduleId,
            },
          })
        ),
        funds,
      }),
    }
  }
  updateModuleAddresses = (
    {
      toAdd,
      toRemove,
    }: {
      toAdd?: string[][][]
      toRemove?: string[]
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            update_module_addresses: {
              to_add: toAdd,
              to_remove: toRemove,
            },
          })
        ),
        funds,
      }),
    }
  }
  installModule = (
    {
      initMsg,
      module,
    }: {
      initMsg?: Binary
      module: ModuleInfo
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            install_module: {
              init_msg: initMsg,
              module,
            },
          })
        ),
        funds,
      }),
    }
  }
  registerModule = (
    {
      module,
      moduleAddr,
    }: {
      module: Module
      moduleAddr: string
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            register_module: {
              module,
              module_addr: moduleAddr,
            },
          })
        ),
        funds,
      }),
    }
  }
  removeModule = (
    {
      moduleId,
    }: {
      moduleId: string
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            remove_module: {
              module_id: moduleId,
            },
          })
        ),
        funds,
      }),
    }
  }
  upgrade = (
    {
      modules,
    }: {
      modules: ModuleInfo[][]
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            upgrade: {
              modules,
            },
          })
        ),
        funds,
      }),
    }
  }
  updateInfo = (
    {
      description,
      link,
      name,
    }: {
      description?: string
      link?: string
      name?: string
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            update_info: {
              description,
              link,
              name,
            },
          })
        ),
        funds,
      }),
    }
  }
  setRoot = (
    {
      governanceType,
      root,
    }: {
      governanceType?: string
      root: string
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            set_root: {
              governance_type: governanceType,
              root,
            },
          })
        ),
        funds,
      }),
    }
  }
  suspendOs = (
    {
      newStatus,
    }: {
      newStatus: boolean
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            suspend_os: {
              new_status: newStatus,
            },
          })
        ),
        funds,
      }),
    }
  }
  enableIBC = (
    {
      newStatus,
    }: {
      newStatus: boolean
    },
    funds?: Coin[]
  ): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            enable_i_b_c: {
              new_status: newStatus,
            },
          })
        ),
        funds,
      }),
    }
  }
  callback = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            callback: {},
          })
        ),
        funds,
      }),
    }
  }
}
