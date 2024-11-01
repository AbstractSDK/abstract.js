import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getIcaClientAddressFromRegistry } from './get-ica-client-address-from-registry'
import { getIcaClientQueryClient } from './get-ica-client-query-client'

export type GetIcaClientQueryClientFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}

export async function getIcaClientQueryClientFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetIcaClientQueryClientFromRegistryParameters) {
  const icaClientAddress = await getIcaClientAddressFromRegistry({
    cosmWasmClient,
    registryAddress,
    version,
  })

  return getIcaClientQueryClient({ cosmWasmClient, icaClientAddress })
}
