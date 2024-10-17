import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetRegistryAddressFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getRegistryAddressFromApi({
  apiUrl,
  chainName,
}: GetRegistryAddressFromApiParameters) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query RegistryDeployment($chain: ID!) {
        deployment(chain: $chain) {
          registry
        }
      }
    `),
    {
      chain: chainName,
    },
  )

  return deploymentData.deployment.registry
}
