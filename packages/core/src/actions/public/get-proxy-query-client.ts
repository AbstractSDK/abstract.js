import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyQueryClient } from '../../codegen/abstract'

export type GetProxyQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  proxyAddress: string
}

export async function getProxyQueryClient({
  cosmWasmClient,
  proxyAddress,
}: GetProxyQueryClientParameters) {
  return new ProxyQueryClient(cosmWasmClient, proxyAddress)
}
