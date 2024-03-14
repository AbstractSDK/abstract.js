import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export type GetVersionControlQueryClientFromApiParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getVersionControlQueryClientFromApi({
  cosmWasmClient,
  apiUrl,
}: GetVersionControlQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const versionControlAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName,
  })

  return getVersionControlQueryClient({
    cosmWasmClient,
    versionControlAddress,
  })
}
