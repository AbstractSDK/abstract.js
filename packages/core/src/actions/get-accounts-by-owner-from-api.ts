import request from 'graphql-request'
import { gql } from '../codegen/gql'
import { accountIdApiFormatToAccountId } from '../utils/account-id/account-id-api-format-to-account-id'

export async function getAccountsByOwnerFromApi(
  apiUrl: string,
  owner: string,
  chains: string[],
) {
  const result = await request(
    apiUrl,
    gql(/* GraphQL */ `
  query Accounts($chains: [ID!]!, $page: Page, $filter: AccountFilter) {
    accounts(chains: $chains, page: $page, filter: $filter) {
      accountId {
        chainName
        sequence
        trace
      }
    }
  }
`),
    { filter: { owner }, chains },
  )
  return result.accounts.map((r) => accountIdApiFormatToAccountId(r.accountId))
}
