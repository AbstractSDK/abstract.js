import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getIbcClientAddressFromRegistry } from './get-ibc-client-address-from-registry'
import { getIbcClientQueryClient } from './get-ibc-client-query-client'

export type GetIbcClientQueryClientFromRegistryParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}
export async function getIbcClientQueryClientFromRegistry({
  cosmWasmClient,
  registryAddress,
  version,
}: GetIbcClientQueryClientFromRegistryParameters) {
  const ibcClientAddress = await getIbcClientAddressFromRegistry({
    cosmWasmClient,
    registryAddress,
    version,
  })

  return getIbcClientQueryClient({ cosmWasmClient, ibcClientAddress })
}
