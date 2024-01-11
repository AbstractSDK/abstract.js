import { Coin } from '@cosmjs/amino'
import { Token } from '../tokens'
import { Asset } from './asset'

export function tokenToAsset(token: Token, amount: Coin['amount']) {
  return { ...token, amount } satisfies Asset
}
