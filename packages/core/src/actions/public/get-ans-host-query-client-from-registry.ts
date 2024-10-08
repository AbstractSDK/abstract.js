import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromRegistry } from './get-ans-host-address-from-registry'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export type GetAnsHostQueryClientFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getAnsHostQueryClientFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetAnsHostQueryClientFromRegistryParameters) {
  const ansHostAddress = await getAnsHostAddressFromRegistry({
    cosmWasmClient,
    registryAddress,
    version,
  })

  return getAnsHostQueryClient({ cosmWasmClient, ansHostAddress })
}
