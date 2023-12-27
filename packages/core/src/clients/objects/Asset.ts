import { type Coin } from '@cosmjs/amino'
import { parseCoins } from '@cosmjs/amino/build/coins'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { P, match } from 'ts-pattern'
import { jsonToBinary, jsonToUtf8 } from '../encoding'
import { type EncodedMsg } from '../index'
import { type AssetInfo } from './AssetInfo'

/**
 * Represents a fungible asset with a known amount
 *
 * Each asset instance contains two values: `info`, which specifies the asset’s type (CW20 or
 * native), and its `amount`, which specifies the asset’s amount.
 */
export class Asset {
  constructor(public readonly info: AssetInfo, public readonly amount: string) {
    if ((info as any).cw1155 !== undefined) {
      throw new Error('CW1155 not supported yet')
    }
  }

  /**
   * Create an asset from a coin.
   */
  static fromCoin(coin: Coin): Asset {
    return new Asset({ native: coin.denom }, coin.amount)
  }

  /**
   * Parse a string of the format {amount}{denom} into an AssetUnchecked object. This is the format
   * that Cosmos SDK uses to stringify native coins. For example:
   *
   * 12345uatom
   * 69420ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2
   * 88888factory/osmo1z926ax906k0ycsuckele6x5hh66e2m4m6ry7dn
   * Since native coin denoms can only start with a non-numerial character, while its amount can
   * only contain numerical characters, we simply consider the first non-numerical character and
   * all that comes after as the denom, while all that comes before it as the amount. This is the
   * approach used in the Steak Hub contract.
   * @param sdkString
   * @throws if the string is not in the expected format
   */
  static fromSdkString(sdkString: string): Asset {
    return parseCoins(sdkString).map((coin) => Asset.fromCoin(coin))[0]!
  }

  /**
   * Create a new asset instance representing a native coin of given denom and amount
   * @param denom
   * @param amount
   */
  static native(denom: string, amount: string): Asset {
    return new Asset({ native: denom }, amount)
  }

  /**
   * Create a new asset instance representing a CW20 token of given contract address and amount.
   * @param address
   * @param amount
   */
  static cw20(address: string, amount: string): Asset {
    return new Asset({ cw20: address }, amount)
  }

  /**
   * Return whether this asset is a native asset.
   */
  public isNative(): boolean {
    return (this.info as any).native !== undefined
  }

  /**
   * Return whether this asset is a CW20 token.
   */
  public isCw20(): boolean {
    return (this.info as any).cw20 !== undefined
  }

  /**
   * Turn a native asset into a coin.
   * @throws if the asset is not a native asset
   */
  public intoCoin(): Coin {
    if (!this.isNative()) {
      throw new Error(`Expected native asset, got ${JSON.stringify(this.info)}`)
    }
    return {
      denom: (this.info as any).native,
      amount: this.amount,
    }
  }

  /**
   * Retrieve the contract address of the CW20 token.
   * @throws if the asset is not a CW20 token
   */
  public cw20Address(): string {
    if (!this.isCw20()) {
      throw new Error(`Expected CW20 asset, got ${JSON.stringify(this.info)}`)
    }
    return (this.info as any).cw20
  }

  /**
   * Generate a message that transfers the asset from the sender to a specified recipient.
   * @param sender
   * @param recipient
   * @param funds funds to send with the message ONLY FOR CW20s
   */
  public transferMsg(
    sender: string,
    recipient: string,
    funds?: Coin[],
  ): EncodedMsg {
    return (
      match<AssetInfo, EncodedMsg>(this.info)
        .with({ native: P.select() }, (nativeDenom) => ({
          typeUrl: '/cosmos.bank.v1beta1.MsgSend',
          value: {
            fromAddress: sender,
            toAddress: recipient,
            amount: [
              {
                denom: nativeDenom,
                amount: this.amount,
              },
            ],
          },
        }))
        .with({ cw20: P.select() }, (cw20Addr) => ({
          typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
          value: MsgExecuteContract.fromPartial({
            sender: sender,
            contract: cw20Addr,
            msg: jsonToUtf8({
              transfer: {
                amount: this.amount,
                recipient,
              },
            }),
            funds,
          }),
        }))
        // CW1155 is not supported yet
        .otherwise((x) => {
          throw new Error(
            `Expected assetInfo with address, got ${JSON.stringify(x)}`,
          )
        })
    )
  }

  /**
   * Generate a message that sends a CW20 token to the specified recipient with a binary payload.
   *
   * @throws if invoked on an Asset instance representing a native coin, as native coins do not
   *   have an equivalent method implemented.
   * @param sender
   * @param contractAddress the contract address to hook
   * @param msg the binary payload to send. Can also provide json
   * @param funds funds to send with the message
   */
  public sendMsg<TJson extends Record<string, unknown>>(
    sender: string,
    contractAddress: string,
    msg: string | TJson,
    funds?: Coin[],
  ): EncodedMsg {
    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: sender,
        contract: contractAddress,
        msg: jsonToUtf8({
          send: {
            amount: this.amount,
            contract: contractAddress,
            msg: typeof msg === 'string' ? msg : jsonToBinary(msg),
          },
        }),
        funds,
      }),
    }
  }
}
