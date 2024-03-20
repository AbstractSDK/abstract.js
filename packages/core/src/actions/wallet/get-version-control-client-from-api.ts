import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getVersionControlClient } from './get-version-control-client'

export type GetVersionControlClientFromApiParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}

export async function getVersionControlClientFromApi({
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetVersionControlClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const versionControlAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName,
  })

  return getVersionControlClient({
    signingCosmWasmClient,
    sender,
    versionControlAddress,
  })
}
