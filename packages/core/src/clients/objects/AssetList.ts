import { type Coin } from '@cosmjs/amino'
import { toBase64 } from '@cosmjs/encoding'
import { type MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx'
import { type MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { match } from 'ts-pattern'

import { ProxyTypes } from '../../codegen/abstract'
export type CosmosMsgForEmpty = ProxyTypes.CosmosMsgForEmpty
import { type EncodedMsg } from '../index'
import { Asset } from './Asset'

/**
 * Represents a list of fungible tokens, each with a known amount.
 */
export class AssetList {
  constructor(public _assets: Asset[]) {}

  /**
   * Create an asset list from a list of native coins.
   */
  static fromCoins(coins: Coin[]): AssetList {
    return new AssetList(coins.map((coin) => Asset.fromCoin(coin)))
  }

  /**
   * Get the list of assets.
   */
  public get assets(): Asset[] {
    return this._assets
  }

  /**
   * Get the length of the list.
   */
  public get length(): number {
    return this._assets.length
  }

  /**
   * Add an asset to the list.
   * @param asset
   */
  public add(asset: Asset): AssetList {
    this._assets.push(asset)
    return this
  }

  /**
   * Generate a list of messages to send all the assets to a recipient.
   * Combines all native asset transfers into a single message.
   */
  public transferMsgs(sender: string, recipient: string): EncodedMsg[] {
    const msgs: EncodedMsg[] = []

    // combine all the native assets into a single message
    const [natives, others] = this._assets.reduce<[Asset[], Asset[]]>(
      ([natives, others], asset) => {
        if (asset.isNative()) {
          natives.push(asset)
        } else {
          others.push(asset)
        }
        return [natives, others]
      },
      [[], []],
    )

    if (natives.length > 0) {
      const nativeCoins = natives.map((asset) => asset.intoCoin())
      const sendMsg = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: sender,
          toAddress: recipient,
          // the denominations must be sorted alphabetically
          amount: nativeCoins.sort((a, b) => a.denom.localeCompare(b.denom)),
        },
      }
      msgs.push(sendMsg)
    }

    // add the rest of the messages
    others.forEach((asset) => {
      msgs.push(asset.transferMsg(sender, recipient))
    })

    return msgs
  }

  /**
   * Generate a list of Cosmos messages to send all the assets to a recipient.
   * These would be executed by a contract such as the Abstract proxy.
   *
   * Combines all native asset transfers into a single message.
   */
  public cosmosTransferMsgs(
    sender: string,
    recipient: string,
  ): CosmosMsgForEmpty[] {
    const msgs: EncodedMsg[] = this.transferMsgs(sender, recipient)

    return msgs.map((msg) => {
      return match(msg.typeUrl)
        .with('/cosmos.bank.v1beta1.MsgSend', () => {
          const { amount, toAddress } = msg.value as MsgSend
          return {
            bank: {
              send: {
                amount,
                to_address: toAddress,
              },
            },
          }
        })
        .with('/cosmwasm.wasm.v1.MsgExecuteContract', () => {
          const { contract, msg: execMsg } = msg.value as MsgExecuteContract
          return {
            wasm: {
              execute: {
                contract_addr: contract,
                funds: [],
                msg: toBase64(execMsg),
              },
            },
          }
        })
        .otherwise(() => {
          throw new Error(`Unsupported message type: ${msg.typeUrl}`)
        })
    }) as CosmosMsgForEmpty[]
  }
}
