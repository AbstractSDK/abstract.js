import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getIbcClientAddressFromVersionControl } from './get-ibc-client-address-from-version-control'
import { getIbcClientQueryClient } from './get-ibc-client-query-client'

export type GetIbcClientQueryClientFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getIbcClientQueryClientFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetIbcClientQueryClientFromVersionControlParameters) {
  const ibcClientAddress = await getIbcClientAddressFromVersionControl({
    cosmWasmClient,
    versionControlAddress,
    version,
  })

  return getIbcClientQueryClient({ cosmWasmClient, ibcClientAddress })
}
