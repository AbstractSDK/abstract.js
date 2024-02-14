import { SendAuthorization } from 'cosmjs-types/cosmos/bank/v1beta1/authz'
import { AuthzTransactionTypeUrl } from './auth-transactions-types-url'

export function encodeAuthzSendAuthorizationMsg(
  options: Parameters<typeof SendAuthorization.fromPartial>[0],
) {
  return {
    typeUrl: AuthzTransactionTypeUrl.SendAuthorization,
    value: SendAuthorization.encode(
      SendAuthorization.fromPartial(options),
    ).finish(),
  }
}
