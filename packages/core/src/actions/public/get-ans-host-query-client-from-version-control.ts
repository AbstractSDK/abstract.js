import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAnsHostAddressAndVersionFromVersionControl } from './get-ans-host-address-and-version-from-version-control'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export type GetAnsHostQueryClientFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getAnsHostQueryClientFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAnsHostQueryClientFromVersionControlParameters) {
  const { address: ansHostAddress } =
    await getAnsHostAddressAndVersionFromVersionControl({
      args: {
        cosmWasmClient,
        versionControlAddress,
        version,
      },
    })

  return getAnsHostQueryClient({ args: { cosmWasmClient, ansHostAddress } })
}
