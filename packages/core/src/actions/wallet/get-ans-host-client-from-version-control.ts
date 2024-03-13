import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromVersionControl } from '../public/get-ans-host-address-from-version-control'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromVersionControlParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
  version?: string
}

export async function getAnsHostClientFromVersionControl({
  signingCosmWasmClient,
  sender,
  versionControlAddress,
  version,
}: GetAnsHostClientFromVersionControlParameters) {
  const ansHostAddress = await getAnsHostAddressFromVersionControl({
    cosmWasmClient: signingCosmWasmClient,
    versionControlAddress,
    version,
  })

  return getAnsHostClient({
    signingCosmWasmClient,
    sender,
    ansHostAddress,
  })
}
