import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { ansTokenFromApi } from '../utils/tokens/ans/ans-token-from-api'
import { AnsId } from '../utils/tokens/ans/types'

export async function getAnsTokensFromApi(
  apiUrl: string,
  chainId: string,
  ids: AnsId[],
) {
  const result = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AssetsQuery($chain: ID!, $filter: IdsFilter!) {
        ans(chain: $chain) {
          assets(filter: $filter) {
            id
            type
            address
          }
        }
      }
  `),
    {
      chain: chainId,
      filter: { ids },
    },
  )

  return result.ans.assets.map((token) => ansTokenFromApi(token))
}
