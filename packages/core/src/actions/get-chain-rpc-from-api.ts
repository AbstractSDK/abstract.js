import { request } from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetChainRpcUrlFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getChainRpcUrlFromApi({
  apiUrl,
  chainName,
}: GetChainRpcUrlFromApiParameters) {
  const chainData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query ChainRpcUrl($chain: ID!) {
        chainInfo(chain: $chain) {
          rpcUrl
        }
      }
    `),
    {
      chain: chainName,
    },
  )

  return chainData.chainInfo.rpcUrl
}
