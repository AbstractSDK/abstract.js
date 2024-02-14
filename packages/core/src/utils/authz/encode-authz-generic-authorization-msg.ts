import { GenericAuthorization } from 'cosmjs-types/cosmos/authz/v1beta1/authz'
import { AuthzTransactionTypeUrl } from './auth-transactions-types-url'
import { BankTransactionTypeUrl } from './bank-transaction-types-url'

export function encodeAuthzGenericAuthorizationMsg(
  permission: `${BankTransactionTypeUrl}`,
) {
  return {
    typeUrl: AuthzTransactionTypeUrl.GenericAuthorization,
    value: GenericAuthorization.encode(
      GenericAuthorization.fromPartial({
        msg: permission,
      }),
    ).finish(),
  }
}
