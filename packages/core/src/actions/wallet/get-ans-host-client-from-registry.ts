import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromRegistry } from '../public/get-ans-host-address-from-registry'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromRegistryParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  registryAddress: string
  version?: string
}

export async function getAnsHostClientFromRegistry({
  signingCosmWasmClient,
  sender,
  registryAddress,
  version,
}: GetAnsHostClientFromRegistryParameters) {
  const ansHostAddress = await getAnsHostAddressFromRegistry({
    cosmWasmClient: signingCosmWasmClient,
    registryAddress,
    version,
  })

  return getAnsHostClient({
    signingCosmWasmClient,
    sender,
    ansHostAddress,
  })
}
