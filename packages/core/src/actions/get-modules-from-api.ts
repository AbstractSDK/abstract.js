import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { ModuleFilter } from '../codegen/gql/graphql'

export type GetModulesFromApiParameters = {
  apiUrl: string
  chainName: string
  filter?: ModuleFilter
}

export async function getModulesFromApi({
  apiUrl,
  chainName,
  filter,
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
      filter,
    },
  )

  return result.modules
}
