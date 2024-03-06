import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAnsHostAddressFromVersionControl } from './get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from './get-ans-host-query-client'
import { getIbcClientAddressFromVersionControl } from './get-ibc-client-address-from-version-control'
import { getIbcClientQueryClient } from './get-ibc-client-query-client'

export type GetIbcClientQueryClientFromVersionControlParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>
export async function getIbcClientQueryClientFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetIbcClientQueryClientFromVersionControlParameters) {
  const ibcClientAddress = await getIbcClientAddressFromVersionControl({
    args: {
      cosmWasmClient,
      versionControlAddress,
      version,
    },
  })

  return getIbcClientQueryClient({ args: { cosmWasmClient, ibcClientAddress } })
}
