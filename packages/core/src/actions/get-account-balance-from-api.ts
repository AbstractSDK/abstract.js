import request from 'graphql-request'
import { tokenFromApi } from 'src/utils/tokens/token-from-api'
import { tokenToAsset } from '..'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'
import { AccountId, accountIdToApiFormat } from '../utils/account-id'

export type GetAccountBalancesFromApi = WithArgs<{
  apiUrl: string
  accountId: AccountId
}>

export async function getAccountBalancesFromApi({
  args: { apiUrl, accountId },
}: GetAccountBalancesFromApi) {
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
