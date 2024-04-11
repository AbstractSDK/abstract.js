import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetModulesFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getModulesFromApi({
  apiUrl,
  chainName,
}: GetModulesFromApiParameters) {
  const result = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query Modules($chain: ID!, $filter: ModuleFilter) {
        modules(chain: $chain, filter: $filter) {
          moduleId
          version
        }
      }
  `),
    {
      chain: chainName,
    },
  )

  return result.modules
}
