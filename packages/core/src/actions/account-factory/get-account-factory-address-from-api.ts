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
        version
        deployment(chain: $chain) {
          accountFactory
        }
        chainInfo(chain: $chain) {
          rpcUrl
        }
      }
    `),
    {
      chain: chainId,
    },
  )

  return deploymentData.deployment.accountFactory
}
