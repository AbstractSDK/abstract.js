import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export type GetAnsHostQueryClientFromApiParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAnsHostQueryClientFromApi({
  cosmWasmClient,
  apiUrl,
}: GetAnsHostQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  const ansHostAddress = await getAnsHostAddressFromApi({
    apiUrl,
    chainName,
  })

  return getAnsHostQueryClient({ cosmWasmClient, ansHostAddress })
}
