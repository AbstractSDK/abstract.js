import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ProxyClient } from '../../codegen/abstract'

export async function getProxyClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  proxyAddress: string,
) {
  return new ProxyClient(cosmWasmClient, sender, proxyAddress)
}
