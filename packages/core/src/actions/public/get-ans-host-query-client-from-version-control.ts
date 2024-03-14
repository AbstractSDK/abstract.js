import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAnsHostAddressFromVersionControl } from './get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export type GetAnsHostQueryClientFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}
export async function getAnsHostQueryClientFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAnsHostQueryClientFromVersionControlParameters) {
  const ansHostAddress = await getAnsHostAddressFromVersionControl({
    cosmWasmClient,
    versionControlAddress,
    version,
  })

  return getAnsHostQueryClient({ cosmWasmClient, ansHostAddress })
}
