import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { ProxyClient } from '../../codegen/abstract'

export type GetProxyClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  proxyAddress: string
}>

export async function getProxyClient({
  args: { signingCosmWasmClient, sender, proxyAddress },
}: GetProxyClientParameters) {
  return new ProxyClient(signingCosmWasmClient, sender, proxyAddress)
}
