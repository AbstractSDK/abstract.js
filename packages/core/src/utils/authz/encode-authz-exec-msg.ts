import { MsgExec } from 'cosmjs-types/cosmos/authz/v1beta1/tx'
import { AuthzTransactionTypeUrl } from './auth-transactions-types-url'

export function encodeAuthzExecMsg(
  grantee: string,
  msgs?:
    | {
        typeUrl?: string | undefined
        value?: Uint8Array | undefined
      }[]
    | undefined,
) {
  return {
    typeUrl: AuthzTransactionTypeUrl.AuthzMsgExec,
    value: MsgExec.fromPartial({
      grantee,
      msgs,
    }),
  }
}
