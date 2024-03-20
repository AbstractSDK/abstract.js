import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetAnsHostAddressFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getAnsHostAddressFromApi({
  apiUrl,
  chainName,
}: GetAnsHostAddressFromApiParameters) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AnsHostDeployment($chain: ID!) {
        version
        deployment(chain: $chain) {
          ansHost
        }
      }
    `),
    {
      chain: chainName,
    },
  )

  return deploymentData.deployment.ansHost
}
