import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getRegistryAddressFromApi } from '../get-registry-address-from-api'
import { getRegistryClient } from './get-registry-client'

export type GetRegistryClientFromApiParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}

export async function getRegistryClientFromApi({
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetRegistryClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const registryAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName,
  })

  return getRegistryClient({
    signingCosmWasmClient,
    sender,
    registryAddress,
  })
}
