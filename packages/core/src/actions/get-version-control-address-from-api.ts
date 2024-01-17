import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export async function getVersionControlAddressFromApi(
  apiUrl: string,
  chainId: string,
) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query VersionControlDeployment($chain: ID!) {
        version
        deployment(chain: $chain) {
          registry
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

  return deploymentData.deployment.registry
}
