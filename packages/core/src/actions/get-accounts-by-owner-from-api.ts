import request from 'graphql-request'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'
import { accountIdApiFormatToAccountId } from '../utils/account-id/account-id-api-format-to-account-id'

export type GetAccountsByOwnerFromApi = WithArgs<{
  apiUrl: string
  owner: string
  chains: string[]
}>

export async function getAccountsByOwnerFromApi({
  args: { apiUrl, owner, chains },
}: GetAccountsByOwnerFromApi) {
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
