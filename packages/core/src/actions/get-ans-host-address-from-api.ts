import { request } from 'graphql-request'
import { WithArgs } from 'src/types/with-args'
import { gql } from '../codegen/gql'

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
