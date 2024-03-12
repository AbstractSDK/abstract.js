import { type Coin } from '@cosmjs/stargate'
import { type NativeAsset } from '../native/types'

export function coinToNativeAsset<const TDenom extends string = string>(
  value: Coin,
) {
  return {
    denom: value.denom as TDenom,
    amount: value.amount,
    type: 'native',
  } satisfies NativeAsset<TDenom>
}
