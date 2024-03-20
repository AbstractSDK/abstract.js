import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getIbcClientQueryClientFromVersionControl } from './get-ibc-client-query-client-from-version-control'
import { getVersionControlQueryClientFromApi } from './get-version-control-query-client-from-api'

export type GetRemoteHosts = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getRemoteHostsFromApi({
  cosmWasmClient,
  apiUrl,
}: GetRemoteHosts) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })

  const ibcQueryClient = await getIbcClientQueryClientFromVersionControl({
    cosmWasmClient,
    versionControlAddress: versionControlQueryClient.contractAddress,
  })
  const { hosts } = await ibcQueryClient.listRemoteHosts()

  return hosts
}
