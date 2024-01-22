import { match } from 'ts-pattern'
import { gql } from '../../../codegen/gql'
import { AssetType } from '../../../codegen/gql/graphql'
import { type AbstractQueryClient } from '../../clients/AbstractClient'
import { type AnsAsset } from '../../clients/objects/AnsAsset'
import { EncodedMsg } from '../../messages'
import { Asset } from './Asset'
import { AssetList } from './AssetList'

const assetsQuery = gql(/* GraphQL */ `
  query AssetsQuery($chain: ID!, $filter: IdsFilter!) {
    ans(chain: $chain) {
      assets(filter: $filter) {
        id
        type
        address
      }
    }
  }
`)

/**
 * Class representing a list of ANS assets.
 * Also see {@link AssetList}
 */
export class AnsAssetList {
  constructor(public _assets: AnsAsset[]) {}

  /**
   * Get the list of ans assets.
   */
  public get assets(): AnsAsset[] {
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
  public add(asset: AnsAsset): AnsAssetList {
    this._assets.push(asset)
    return this
  }

  /**
   * Resolves the assets into an {@link AssetList} by querying the chain.
   */
  public resolve = async (
    queryClient: AbstractQueryClient,
  ): Promise<AssetList> => {
    const chainName = await queryClient.getChainName()
    const ids = this.assets.map((asset) => asset.name.ansName)
    const {
      ans: { assets: resolvedAssets },
    } = await queryClient.queryApi(assetsQuery, {
      chain: chainName,
      filter: {
        ids,
      },
    })

    const assets = resolvedAssets.map(({ type, address, id }) => {
      const asset = this.assets.find(
        // sanity
        (asset) => asset.name.ansName.toLowerCase() === id.toLowerCase(),
      )
      if (!asset) {
        throw new Error(`Could not find asset ${id}`)
      }

      const amount = asset.amount

      return match(type)
        .with(AssetType.Cw20, () => Asset.cw20(address, amount))
        .with(AssetType.Native, () => Asset.native(address, amount))
        .with(
          AssetType.Cw1155,
          () =>
            // cw1155 is not supported by default, and is a highly uncommon asset type
            new Asset(
              {
                cw1155: address,
              },
              amount,
            ),
        )
        .exhaustive()
    })

    return new AssetList(assets)
  }

  /**
   * Generate a list of messages to send all the assets to a recipient.
   * Combines all native asset transfers into a single message.
   * @param queryClient - Abstract query client to use for resolving the assets
   * @param sender
   * @param recipient
   *
   * @see {@link AssetList.transferMsgs}
   */
  public async transferMsgs(
    queryClient: AbstractQueryClient,
    sender: string,
    recipient: string,
  ): Promise<EncodedMsg[]> {
    const resolved = await this.resolve(queryClient)
    return resolved.transferMsgs(sender, recipient)
  }
}
