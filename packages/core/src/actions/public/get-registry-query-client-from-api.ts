import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getRegistryAddressFromApi } from '../get-registry-address-from-api'
import { getRegistryQueryClient } from './get-registry-query-client'

export type GetRegistryQueryClientFromApiParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getRegistryQueryClientFromApi({
  cosmWasmClient,
  apiUrl,
}: GetRegistryQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const registryAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName,
  })

  return getRegistryQueryClient({
    cosmWasmClient,
    registryAddress,
  })
}
