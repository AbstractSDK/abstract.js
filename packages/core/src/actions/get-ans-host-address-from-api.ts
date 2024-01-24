import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'

export type GetAnsHostAddressFromApiParameters = WithArgs<{
  apiUrl: string
  chainName: string
}>

export async function getAnsHostAddressFromApi({
  args: { apiUrl, chainName },
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
