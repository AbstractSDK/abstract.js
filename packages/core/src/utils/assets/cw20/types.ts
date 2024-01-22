import { Coin } from '@cosmjs/amino'
import { CW20Token, isCW20Token } from '../../tokens/cw20/types'
import { Asset } from '../asset'

export type CW20Asset<TAddress extends string = string> = Pick<Coin, 'amount'> &
  CW20Token<TAddress>

export function isCW20Asset(asset: Asset): asset is CW20Asset {
  return isCW20Token(asset)
}
