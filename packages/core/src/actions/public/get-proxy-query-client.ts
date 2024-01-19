import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { ProxyQueryClient } from '../../codegen/abstract'

export type GetProxyQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  proxyAddress: string
}>

export async function getProxyQueryClient({
  args: { cosmWasmClient, proxyAddress },
}: GetProxyQueryClientParameters) {
  return new ProxyQueryClient(cosmWasmClient, proxyAddress)
}
