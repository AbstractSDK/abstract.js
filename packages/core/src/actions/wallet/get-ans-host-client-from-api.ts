import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostClient } from './get-ans-host-client'

export async function getAnsHostClientFromApi(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const ansHostAddress = await getAnsHostAddressFromApi(apiUrl, chainId)

  return getAnsHostClient(cosmWasmClient, sender, ansHostAddress)
}
