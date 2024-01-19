import { request } from 'graphql-request'
import { WithArgs } from 'src/types/with-args'
import { gql } from '../codegen/gql'

export type GetAccountFactoryAddressFromApiParameters = WithArgs<{
  apiUrl: string
  chainId: string
}>

export async function getAccountFactoryAddressFromApi({
  args: { apiUrl, chainId },
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
      chain: chainId,
    },
  )

  return deploymentData.deployment.accountFactory
}
