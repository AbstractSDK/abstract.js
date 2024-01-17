import { Asset } from '../asset'
import { CW20Asset, isCW20Asset } from './types'

export function assetToCW20Asset<const TAsset extends Asset = Asset>(
  asset: TAsset,
) {
  if (isCW20Asset(asset))
    return asset as CW20Asset<
      TAsset extends CW20Asset ? TAsset['address'] : never
    >
  throw new Error('Asset is not a CW20 asset')
}
