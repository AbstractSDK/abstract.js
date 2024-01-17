import { EncodedMsg } from '../../../clients'
import { jsonToUtf8 } from '../../encoding'
import { CW20Asset } from './types'

export function encodeCW20AssetTransferMsg<
  const TAddress extends string = string,
>(asset: CW20Asset<TAddress>, sender: string, recipient: string) {
  return {
    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
    value: {
      contract: asset.address,
      sender,
      msg: jsonToUtf8({
        transfer: {
          amount: asset.amount,
          recipient,
        },
      }),
    },
  } as const satisfies EncodedMsg
}
