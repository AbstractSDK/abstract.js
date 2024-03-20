import request from 'graphql-request'
import { tokenToAsset } from '..'
import { gql } from '../codegen/gql'
import { AccountId, accountIdToApiFormat } from '../utils/account-id'
import { tokenFromApi } from '../utils/tokens/token-from-api'

export type GetAccountBalancesFromApiParameters = {
  apiUrl: string
  accountId: AccountId
}

export async function getAccountBalancesFromApi({
  apiUrl,
  accountId,
}: GetAccountBalancesFromApiParameters) {
  const result = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query Balances($ids: [AccountIdWithChain!]!) {
        accountsByIds(ids: $ids) {
          balances {
            amount
            type
            denom
          }
        }
      }
`),
    { ids: [accountIdToApiFormat(accountId)] },
  )
  return result.accountsByIds[0]?.balances.map(({ amount, type, denom }) =>
    tokenToAsset(tokenFromApi({ type, denom }), amount),
  )
}
