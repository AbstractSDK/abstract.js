import { request } from 'graphql-request'
import { gql } from '../codegen/gql'
import { WithArgs } from '../types/with-args'

export type GetAccountFactoryAddressFromApiParameters = WithArgs<{
  apiUrl: string
  chainName: string
}>

export async function getAccountFactoryAddressFromApi({
  args: { apiUrl, chainName },
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
