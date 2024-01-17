import { Asset } from './asset'
import { NativeAsset, isNativeAsset } from './native/types'

export function assetToNativeAsset<const TAsset extends Asset = Asset>(
  asset: TAsset,
) {
  if (isNativeAsset(asset))
    return asset as NativeAsset<
      TAsset extends NativeAsset ? TAsset['denom'] : never
    >

  throw new Error('Asset is not a Native asset')
}
