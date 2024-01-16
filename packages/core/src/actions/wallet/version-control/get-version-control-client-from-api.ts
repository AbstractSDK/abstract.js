import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlClient } from '../../../codegen/abstract'
import { getVersionControlAddressFromApi } from '../../version-control/get-version-control-address-from-api'
import { getVersionControlClient } from './get-version-control-client'

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

  return getVersionControlClient(cosmWasmClient, sender, versionControlAddress)
}
