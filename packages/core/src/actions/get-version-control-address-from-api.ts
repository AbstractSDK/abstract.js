import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'

export type GetVersionControlAddressFromApiParameters = WithArgs<{
  apiUrl: string
  chainId: string
}>

export async function getVersionControlAddressFromApi({
  args: { apiUrl, chainId },
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
      chain: chainId,
    },
  )

  return deploymentData.deployment.registry
}
