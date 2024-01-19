import { request } from 'graphql-request'
import { WithArgs } from 'src/types/with-args'
import { gql } from '../codegen/gql'

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
