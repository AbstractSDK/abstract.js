import { Coin } from '@cosmjs/amino'
import { Asset } from '../assets'
import { Token } from './token'

export function tokenToAsset(token: Token, amount: Coin['amount']) {
  return { ...token, amount } satisfies Asset
}
