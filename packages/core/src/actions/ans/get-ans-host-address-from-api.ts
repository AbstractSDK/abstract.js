import { request } from 'graphql-request'
import { gql } from '../../codegen/gql'

export async function getAnsHostAddressFromApi(
  apiUrl: string,
  chainId: string,
) {
  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AnsHostDeployment($chain: ID!) {
        version
        deployment(chain: $chain) {
          ansHost
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

  return deploymentData.deployment.ansHost
}
