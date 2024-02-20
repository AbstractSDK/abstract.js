import { GenericAuthorization } from 'cosmjs-types/cosmos/authz/v1beta1/authz'
import { MsgGrant } from 'cosmjs-types/cosmos/authz/v1beta1/tx'
import { AuthzTransactionTypeUrl } from './auth-transactions-types-url'

export function encodeAuthzGrantGenericAuthorizationMsg(
  granter: string,
  grantee: string,
  permission: string,
  expiration?:
    | {
        seconds?: bigint | undefined
        nanos?: number | undefined
      }
    | undefined,
) {
  return {
    typeUrl: AuthzTransactionTypeUrl.AuthzMsgGrant,
    value: MsgGrant.fromPartial({
      granter,
      grantee,
      grant: {
        authorization: {
          typeUrl: AuthzTransactionTypeUrl.GenericAuthorization,
          value: GenericAuthorization.encode(
            GenericAuthorization.fromPartial({
              msg: permission,
            }),
          ).finish(),
        },
        expiration,
      },
    }),
  }
}
