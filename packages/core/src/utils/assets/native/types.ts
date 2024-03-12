import { Coin } from '@cosmjs/stargate'
import { NativeToken, isNativeToken } from '../../tokens/native/types'
import { Asset } from '../asset'

export type NativeAsset<TDenom extends string = string> = NativeToken<TDenom> &
  Pick<Coin, 'amount'>

export function isNativeAsset(asset: Asset): asset is NativeAsset {
  return isNativeToken(asset)
}
