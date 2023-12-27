import { type Coin } from '@cosmjs/amino'
import { type AbstractQueryClient } from '../../clients/AbstractClient'
import { type EncodedMsg } from '../index'
import { AnsAssetList } from './AnsAssetList'
import { type Asset } from './Asset'
import { AnsAssetEntry } from './ansAssetEntry'

/**
 * Represents an asset within Abstract Name Service with an amount.
 */
export class AnsAsset {
  readonly amount: string
  readonly name: AnsAssetEntry

  constructor(amount: string, name: string | AnsAssetEntry) {
    this.amount = amount
    this.name = typeof name === 'string' ? new AnsAssetEntry(name) : name
    this.name.validate()
  }

  /**
   * Resolves the asset to its info and type.
   */
  public resolve = async (client: AbstractQueryClient): Promise<Asset> => {
    const resolved = await new AnsAssetList([this]).resolve(client)
    return resolved.assets[0]!
  }

  /**
   * Generate a message that transfers the asset from the sender to a specified recipient.
   * @param queryClient - ABstract query client to use for resolving the asset
   * @param sender
   * @param recipient
   * @param funds funds to send with the message ONLY FOR CW20s
   * @see {@link Asset.transferMsg}
   */
  public transferMsg = async (
    queryClient: AbstractQueryClient,
    sender: string,
    recipient: string,
    funds?: Coin[],
  ): Promise<EncodedMsg> => {
    const resolved = await this.resolve(queryClient)
    return resolved.transferMsg(sender, recipient, funds)
  }
}
