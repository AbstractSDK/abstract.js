import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromApiParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}

export async function getAnsHostClientFromApi({
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetAnsHostClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const ansHostAddress = await getAnsHostAddressFromApi({
    apiUrl,
    chainName,
  })

  return getAnsHostClient({
    signingCosmWasmClient,
    sender,
    ansHostAddress,
  })
}
