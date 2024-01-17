import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { ansTokenFromApi } from '../utils/tokens/ans/ans-token-from-api'
import { AnsId } from '../utils/tokens/ans/types'

export async function getAnsTokenFromApi(
  apiUrl: string,
  chainId: string,
  id: AnsId,
) {
  const result = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AssetQuery($chain: ID!, $filter: IdsFilter!) {
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
      filter: { ids: [id] },
    },
  )

  const token = result.ans.assets[0]
  if (!token) throw new Error(`Token with id ${id} not found`)

  return ansTokenFromApi(token)
}
