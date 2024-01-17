import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromVersionControl } from '../public/get-ans-host-address-from-version-control'
import { getAnsHostClient } from './get-ans-host-client'

export async function getAnsHostClientFromVersionControl(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  versionControlAddress: string,
  version?: string,
) {
  const ansHostAddress = await getAnsHostAddressFromVersionControl(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return getAnsHostClient(cosmWasmClient, sender, ansHostAddress)
}
