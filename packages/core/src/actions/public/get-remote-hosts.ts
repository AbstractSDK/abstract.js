import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'
import { getAbstractModuleAddressFromVersionControl } from './get-abstract-module-address-from-version-control'
import { getIbcClientQueryClientFromVersionControl } from './get-ibc-client-query-client-from-version-control'
import { getVersionControlQueryClient } from './get-version-control-query-client'
import { getVersionControlQueryClientFromApi } from './get-version-control-query-client-from-api'

export type GetRemoteHosts = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getRemoteHosts({
  args: { cosmWasmClient, apiUrl },
}: GetRemoteHosts) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    args: {
      cosmWasmClient,
      apiUrl,
    },
  })

  const ibcQueryClient = await getIbcClientQueryClientFromVersionControl({
    args: {
      cosmWasmClient,
      versionControlAddress: versionControlQueryClient.contractAddress,
    },
  })
  const { hosts } = await ibcQueryClient.listRemoteHosts()

  return hosts
}
