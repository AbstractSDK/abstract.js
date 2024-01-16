import { request } from 'graphql-request'
import { gql } from '../../codegen/gql'

export async function getAccountFactoryAddressFromApi(
  apiUrl: string,
  chainId: string,
) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AccountFactoryDeployment($chain: ID!) {
        deployment(chain: $chain) {
          accountFactory
        }
      }
    `),
    {
      chain: chainId,
    },
  )

  return deploymentData.deployment.accountFactory
}
