import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlQueryClient } from 'src/codegen/abstract'
import { getVersionControlAddressFromApi } from '../../version-control/get-version-control-address-from-api'

export async function getVersionControlQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const versionControlAddress = await getVersionControlAddressFromApi(
    apiUrl,
    chainId,
  )

  return new VersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
