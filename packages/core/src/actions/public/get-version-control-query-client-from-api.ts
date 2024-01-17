import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export async function getVersionControlQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const versionControlAddress = await getVersionControlAddressFromApi(
    apiUrl,
    chainId,
  )

  return getVersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
