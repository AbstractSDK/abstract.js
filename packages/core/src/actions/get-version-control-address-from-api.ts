import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetVersionControlAddressFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getVersionControlAddressFromApi({
  apiUrl,
  chainName,
}: GetVersionControlAddressFromApiParameters) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query VersionControlDeployment($chain: ID!) {
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
