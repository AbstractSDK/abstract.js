import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export async function getAnsHostQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()

  const ansHostAddress = await getAnsHostAddressFromApi(apiUrl, chainId)

  return getAnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
