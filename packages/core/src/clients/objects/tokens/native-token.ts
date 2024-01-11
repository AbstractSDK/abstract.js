import { Token } from './token'

export type NativeToken<TDenom extends string = string> = {
  type: 'native'
  denom: TDenom
}

export function isNativeToken(asset: Token): asset is NativeToken {
  return asset.type === 'native'
}
