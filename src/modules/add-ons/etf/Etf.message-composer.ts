/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { Coin } from '@cosmjs/amino'
import { MsgExecuteContractEncodeObject } from 'cosmwasm'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { toUtf8 } from '@cosmjs/encoding'
import {
  Addr,
  AddOnState,
  Memory,
  ConfigValidityResponse,
  ExecuteMsg,
  AddOnExecuteMsg,
  Uint128,
  Binary,
  AssetInfoBaseForString,
  Decimal,
  Cw20ReceiveMsg,
  AssetBaseForString,
  InstantiateMsg,
  AddOnInstantiateMsg,
  QueryMsg,
  AddOnQueryMsg,
  AssetEntry,
  StateResponse,
} from './Etf.types'
export interface EtfMessage {
  contractAddress: string
  sender: string
  base: (funds?: Coin[]) => MsgExecuteContractEncodeObject
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
  provideLiquidity: (
    {
      asset,
    }: {
      asset: AssetBaseForString
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  updatePool: (
    {
      assetsToAdd,
      assetsToRemove,
      depositAsset,
    }: {
      assetsToAdd: string[]
      assetsToRemove: string[]
      depositAsset?: string
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  import: (funds?: Coin[]) => MsgExecuteContractEncodeObject
  setFee: (
    {
      fee,
    }: {
      fee: Decimal
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
}
export class EtfMessageComposer implements EtfMessage {
  sender: string
  contractAddress: string

  constructor(sender: string, contractAddress: string) {
    this.sender = sender
    this.contractAddress = contractAddress
    this.base = this.base.bind(this)
    this.receive = this.receive.bind(this)
    this.provideLiquidity = this.provideLiquidity.bind(this)
    this.updatePool = this.updatePool.bind(this)
    this.import = this.import.bind(this)
    this.setFee = this.setFee.bind(this)
  }

  base = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            base: {},
          })
        ),
        funds,
      }),
    }
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
  provideLiquidity = (
    {
      asset,
    }: {
      asset: AssetBaseForString
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
            provide_liquidity: {
              asset,
            },
          })
        ),
        funds,
      }),
    }
  }
  updatePool = (
    {
      assetsToAdd,
      assetsToRemove,
      depositAsset,
    }: {
      assetsToAdd: string[]
      assetsToRemove: string[]
      depositAsset?: string
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
            update_pool: {
              assets_to_add: assetsToAdd,
              assets_to_remove: assetsToRemove,
              deposit_asset: depositAsset,
            },
          })
        ),
        funds,
      }),
    }
  }
  import = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            import: {},
          })
        ),
        funds,
      }),
    }
  }
  setFee = (
    {
      fee,
    }: {
      fee: Decimal
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
            set_fee: {
              fee,
            },
          })
        ),
        funds,
      }),
    }
  }
}
