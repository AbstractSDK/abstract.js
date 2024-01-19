import { request } from 'graphql-request'
import { WithArgs } from 'src/types/with-args'
import { gql } from '../codegen/gql'
import { ansTokenFromApi } from '../utils/tokens/ans/ans-token-from-api'
import { AnsId } from '../utils/tokens/ans/types'

export type GetAnsTokensFromApiParameters = WithArgs<{
  apiUrl: string
  chainId: string
  ids: AnsId[]
}>

export async function getAnsTokensFromApi({
  args: { apiUrl, chainId, ids },
}: GetAnsTokensFromApiParameters) {
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
