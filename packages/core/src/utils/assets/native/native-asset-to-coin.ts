import { Coin } from '@cosmjs/amino'
import { NativeAsset } from './types'

export function nativeAssetToCoin<const TDenom extends string = string>(
  asset: NativeAsset<TDenom>,
) {
  return {
    denom: asset.denom,
    amount: asset.amount,
  } satisfies Coin
}
