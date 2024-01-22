import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'

export type GetAnsHostAddressFromApiParameters = WithArgs<{
  apiUrl: string
  chainId: string
}>

export async function getAnsHostAddressFromApi({
  args: { apiUrl, chainId },
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
      chain: chainId,
    },
  )

  return deploymentData.deployment.ansHost
}
