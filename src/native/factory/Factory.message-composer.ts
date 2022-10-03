/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
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
  Uint128,
  Binary,
  GovernanceDetails,
  Cw20ReceiveMsg,
  QueryMsg,
  MigrateMsg,
  ConfigResponse,
} from './Factory.types'
export interface FactoryMessage {
  contractAddress: string
  sender: string
  receive: (
    {
      amount,
      msg,
      sender,
    }: {
      amount: Uint128
      msg: Binary
      sender: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  updateConfig: (
    {
      admin,
      memoryContract,
      moduleFactoryAddress,
      subscriptionAddress,
      versionControlContract,
    }: {
      admin?: string
      memoryContract?: string
      moduleFactoryAddress?: string
      subscriptionAddress?: string
      versionControlContract?: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  createOs: (
    {
      description,
      governance,
      link,
      name,
    }: {
      description?: string
      governance: GovernanceDetails
      link?: string
      name: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
}
export class FactoryMessageComposer implements FactoryMessage {
  sender: string
  contractAddress: string

  constructor(sender: string, contractAddress: string) {
    this.sender = sender
    this.contractAddress = contractAddress
    this.receive = this.receive.bind(this)
    this.updateConfig = this.updateConfig.bind(this)
    this.createOs = this.createOs.bind(this)
  }

  receive = (
    {
      amount,
      msg,
      sender,
    }: {
      amount: Uint128
      msg: Binary
      sender: string
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
            receive: {
              amount,
              msg,
              sender,
            },
          })
        ),
        funds,
      }),
    }
  }
  updateConfig = (
    {
      admin,
      memoryContract,
      moduleFactoryAddress,
      subscriptionAddress,
      versionControlContract,
    }: {
      admin?: string
      memoryContract?: string
      moduleFactoryAddress?: string
      subscriptionAddress?: string
      versionControlContract?: string
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
            update_config: {
              admin,
              memory_contract: memoryContract,
              module_factory_address: moduleFactoryAddress,
              subscription_address: subscriptionAddress,
              version_control_contract: versionControlContract,
            },
          })
        ),
        funds,
      }),
    }
  }
  createOs = (
    {
      description,
      governance,
      link,
      name,
    }: {
      description?: string
      governance: GovernanceDetails
      link?: string
      name: string
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
            create_os: {
              description,
              governance,
              link,
              name,
            },
          })
        ),
        funds,
      }),
    }
  }
}
