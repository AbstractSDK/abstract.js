import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ProxyClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

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
