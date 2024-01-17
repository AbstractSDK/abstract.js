import { request } from 'graphql-request'
import { ansTokenFromApi } from 'src/utils/tokens/ans/ans-token-from-api'
import { AnsId } from 'src/utils/tokens/ans/types'
import { gql } from '../../../codegen/gql'

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
