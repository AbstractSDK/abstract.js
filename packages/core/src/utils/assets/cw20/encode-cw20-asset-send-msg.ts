import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { EncodedMsg } from '../../../legacy/messages'
import { jsonToBinary, jsonToUtf8 } from '../../encoding'
import { CW20Asset } from './types'

export function encodeCW20AssetSendMsg<
  const TMsg extends Record<string, unknown> | string,
  const TAddress extends string = string,
>(asset: CW20Asset<TAddress>, sender: string, msg: TMsg) {
  return {
    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
    value: MsgExecuteContract.fromPartial({
      sender: sender,
      contract: asset.address,
      msg: jsonToUtf8({
        send: {
          amount: asset.amount,
          contract: asset.address,
          msg: typeof msg === 'string' ? msg : jsonToBinary(msg),
        },
      }),
    }),
  } as const satisfies EncodedMsg
}
