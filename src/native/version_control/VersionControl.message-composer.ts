/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
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
  ModuleVersion,
  ModuleReference,
  Addr,
  ModuleInfo,
  Core,
  QueryMsg,
  MigrateMsg,
  ConfigResponse,
  ModuleResponse,
  Module,
  ModulesResponse,
  OsCoreResponse,
} from './VersionControl.types'
export interface VersionControlMessage {
  contractAddress: string
  sender: string
  removeModule: (
    {
      module,
    }: {
      module: ModuleInfo
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  addModules: (
    {
      modules,
    }: {
      modules: ModuleInfo[][]
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  addOs: (
    {
      core,
      osId,
    }: {
      core: Core
      osId: number
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  setAdmin: (
    {
      newAdmin,
    }: {
      newAdmin: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  setFactory: (
    {
      newFactory,
    }: {
      newFactory: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
}
export class VersionControlMessageComposer implements VersionControlMessage {
  sender: string
  contractAddress: string

  constructor(sender: string, contractAddress: string) {
    this.sender = sender
    this.contractAddress = contractAddress
    this.removeModule = this.removeModule.bind(this)
    this.addModules = this.addModules.bind(this)
    this.addOs = this.addOs.bind(this)
    this.setAdmin = this.setAdmin.bind(this)
    this.setFactory = this.setFactory.bind(this)
  }

  removeModule = (
    {
      module,
    }: {
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
            remove_module: {
              module,
            },
          })
        ),
        funds,
      }),
    }
  }
  addModules = (
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
            add_modules: {
              modules,
            },
          })
        ),
        funds,
      }),
    }
  }
  addOs = (
    {
      core,
      osId,
    }: {
      core: Core
      osId: number
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
            add_os: {
              core,
              os_id: osId,
            },
          })
        ),
        funds,
      }),
    }
  }
  setAdmin = (
    {
      newAdmin,
    }: {
      newAdmin: string
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
            set_admin: {
              new_admin: newAdmin,
            },
          })
        ),
        funds,
      }),
    }
  }
  setFactory = (
    {
      newFactory,
    }: {
      newFactory: string
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
            set_factory: {
              new_factory: newFactory,
            },
          })
        ),
        funds,
      }),
    }
  }
}
