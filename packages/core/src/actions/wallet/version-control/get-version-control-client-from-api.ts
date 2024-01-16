import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlClient } from '../../../codegen/abstract'
import { getVersionControlAddressFromApi } from '../../version-control/get-version-control-address-from-api'

export async function getVersionControlClientFromApi(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const versionControlAddress = await getVersionControlAddressFromApi(
    apiUrl,
    chainId,
  )

  return new VersionControlClient(cosmWasmClient, sender, versionControlAddress)
}
