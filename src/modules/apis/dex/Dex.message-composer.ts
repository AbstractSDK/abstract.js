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
  AssetEntry,
  Uint128,
  ApiResponse,
  ContractEntry,
  Addr,
  ConfigResponse,
  ExecuteMsgForEmpty,
  BaseExecuteMsg,
  ApiRequestMsgForEmpty,
  Empty,
  ExecuteMsg,
  RequestMsg,
  Decimal,
  ApiRequestMsgForRequestMsg,
  QueryMsg,
  QueryMsg1,
  BaseQueryMsg,
  TradersResponse,
} from './Dex.types'
export interface DexMessage {
  contractAddress: string
  sender: string
  request: (
    {
      proxyAddress,
      request,
    }: {
      proxyAddress?: string
      request: Empty
    },
    funds?: Coin[]
  ) => MsgExecuteContractEncodeObject
  configure: (funds?: Coin[]) => MsgExecuteContractEncodeObject
}
export class DexMessageComposer implements DexMessage {
  sender: string
  contractAddress: string

  constructor(sender: string, contractAddress: string) {
    this.sender = sender
    this.contractAddress = contractAddress
    this.request = this.request.bind(this)
    this.configure = this.configure.bind(this)
  }

  request = (
    {
      proxyAddress,
      request,
    }: {
      proxyAddress?: string
      request: Empty
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
            request: {
              proxy_address: proxyAddress,
              request,
            },
          })
        ),
        funds,
      }),
    }
  }
  configure = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(
          JSON.stringify({
            configure: {},
          })
        ),
        funds,
      }),
    }
  }
}