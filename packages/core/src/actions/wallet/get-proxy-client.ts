import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ProxyClient } from '../../codegen/abstract'

export type GetProxyClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  proxyAddress: string
}

export async function getProxyClient({
  signingCosmWasmClient,
  sender,
  proxyAddress,
}: GetProxyClientParameters) {
  return new ProxyClient(signingCosmWasmClient, sender, proxyAddress)
}
