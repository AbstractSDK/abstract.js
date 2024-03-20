import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetAccountFactoryAddressFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getAccountFactoryAddressFromApi({
  apiUrl,
  chainName,
}: GetAccountFactoryAddressFromApiParameters) {
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
      chain: chainName,
    },
  )

  return deploymentData.deployment.accountFactory
}
