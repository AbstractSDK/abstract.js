import { MsgGrant } from 'cosmjs-types/cosmos/authz/v1beta1/tx'
import { SendAuthorization } from 'cosmjs-types/cosmos/bank/v1beta1/authz'
import { AuthzTransactionTypeUrl } from './auth-transactions-types-url'

export function encodeAuthzGrantSendAuthorizationMsg(
  granter: string,
  grantee: string,
  options: {
    spendLimit?:
      | {
          denom?: string | undefined
          amount?: string | undefined
        }[]
      | undefined
    allowList?: string[] | undefined
  },
  expiration:
    | {
        seconds?: bigint | undefined
        nanos?: number | undefined
      }
    | undefined = { seconds: 99999999999 } as any,
) {
  return {
    typeUrl: AuthzTransactionTypeUrl.AuthzMsgGrant,
    value: MsgGrant.fromPartial({
      granter,
      grantee,
      grant: {
        authorization: {
          typeUrl: AuthzTransactionTypeUrl.SendAuthorization,
          value: SendAuthorization.encode(
            SendAuthorization.fromPartial(options),
          ).finish(),
        },
        expiration,
      },
    }),
  }
}
