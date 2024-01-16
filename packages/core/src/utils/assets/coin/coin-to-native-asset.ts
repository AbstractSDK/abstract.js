import { type Coin } from '@cosmjs/amino'
import { type NativeAsset } from '../native/native-asset'

export function coinToNativeAsset<const TDenom extends string = string>(
  value: Coin,
) {
  return {
    denom: value.denom as TDenom,
    amount: value.amount,
    type: 'native',
  } satisfies NativeAsset<TDenom>
}
