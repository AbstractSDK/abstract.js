import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx'
import { BankTransactionTypeUrl } from './bank-transaction-types-url'

export function encodeBankSendMsg(
  fromAddress?: string | undefined,
  toAddress?: string | undefined,
  amount?:
    | {
        denom?: string | undefined
        amount?: string | undefined
      }[]
    | undefined,
) {
  return {
    typeUrl: BankTransactionTypeUrl.Send,
    value: MsgSend.encode(
      MsgSend.fromPartial({
        fromAddress,
        toAddress,
        amount,
      }),
    ).finish(),
  }
}
