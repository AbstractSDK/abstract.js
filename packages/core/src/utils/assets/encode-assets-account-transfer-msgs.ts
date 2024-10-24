import { toBase64 } from '@cosmjs/encoding'
import { CosmosMsgForEmpty } from '../../codegen/abstract/cosmwasm-codegen/Account.types'
import { Asset } from './asset'
import { encodeAssetsTransfersMsgs } from './encode-assets-transfer-msgs'

export function encodeAssetsAccountTransferMsgs(
  assets: Asset[],
  sender: string,
  recipient: string,
) {
  const msgs = encodeAssetsTransfersMsgs(assets, sender, recipient)

  return msgs.map((msg) => {
    if (msg.typeUrl === '/cosmos.bank.v1beta1.MsgSend') {
      const { amount, toAddress } = msg.value
      return {
        bank: {
          send: {
            amount,
            to_address: toAddress,
          },
        },
      } satisfies CosmosMsgForEmpty
    }
    if (msg.typeUrl === '/cosmwasm.wasm.v1.MsgExecuteContract') {
      const { contract, msg: execMsg } = msg.value
      return {
        wasm: {
          execute: {
            contract_addr: contract,
            funds: [],
            msg: toBase64(execMsg),
          },
        },
      } satisfies CosmosMsgForEmpty
    }
    throw new Error(`Unsupported message type: ${msg.typeUrl}`)
  }) satisfies CosmosMsgForEmpty[]
}
