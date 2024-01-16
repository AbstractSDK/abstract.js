import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyQueryClient } from 'src/codegen/abstract'

export async function getProxyQueryClient(
  cosmWasmClient: CosmWasmClient,
  proxyAddress: string,
) {
  return new ProxyQueryClient(cosmWasmClient, proxyAddress)
}
