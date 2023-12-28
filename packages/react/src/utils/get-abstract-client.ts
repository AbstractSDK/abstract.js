import {
  ABSTRACT_API_URL,
  AbstractClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export async function getAbstractClient({
  sender,
  client,
  chain,
  overrideApiUrl = ABSTRACT_API_URL,
}: {
  sender: string
  client: SigningCosmWasmClient
  chain: string
  overrideApiUrl?: string
}) {
  // TODO: re-check if grabbing the first chain of the list is a good solution
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain,
  })

  const {
    ansHost: ansHostAddress,
    registry: registryAddress,
    accountFactory: factoryAddress,
  } = data.deployment

  return new AbstractClient({
    sender,
    client,
    ansHostAddress,
    registryAddress,
    factoryAddress,
  })
}
