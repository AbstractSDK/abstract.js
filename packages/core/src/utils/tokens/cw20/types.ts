import { Token } from '../token'

export type CW20Token<TAddress extends string = string> = {
  readonly address: TAddress
  readonly type: 'cw20'
}

export function isCW20Token(asset: Token): asset is CW20Token {
  return asset.type === 'cw20'
}
