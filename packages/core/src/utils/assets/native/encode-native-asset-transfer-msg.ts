import { EncodedMsg } from '../../encoding'
import { NativeAsset } from './types'

export function encodeNativeAssetTransferMsg<
  const TDenom extends string = string,
>(asset: NativeAsset<TDenom>, fromAddress: string, toAddress: string) {
  return {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: fromAddress,
      toAddress: toAddress,
      amount: [
        {
          denom: asset.denom,
          amount: asset.amount,
        },
      ],
    },
  } as const satisfies EncodedMsg
}
