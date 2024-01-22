import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyQueryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetProxyQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  proxyAddress: string
}>

export async function getProxyQueryClient({
  args: { cosmWasmClient, proxyAddress },
}: GetProxyQueryClientParameters) {
  return new ProxyQueryClient(cosmWasmClient, proxyAddress)
}
