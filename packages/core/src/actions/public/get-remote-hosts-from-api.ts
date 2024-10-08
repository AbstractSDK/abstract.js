import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getIbcClientQueryClientFromRegistry } from './get-ibc-client-query-client-from-registry'
import { getRegistryQueryClientFromApi } from './get-registry-query-client-from-api'

export type GetRemoteHosts = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getRemoteHostsFromApi({
  cosmWasmClient,
  apiUrl,
}: GetRemoteHosts) {
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })

  const ibcQueryClient = await getIbcClientQueryClientFromRegistry({
    cosmWasmClient,
    registryAddress: registryQueryClient.contractAddress,
  })
  const { hosts } = await ibcQueryClient.listRemoteHosts()

  return hosts
}
