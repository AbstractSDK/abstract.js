import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { chainIdToName } from '../../utils/chain-registry'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export type GetVersionControlQueryClientFromApiParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getVersionControlQueryClientFromApi({
  args: { cosmWasmClient, apiUrl },
}: GetVersionControlQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const versionControlAddress = await getVersionControlAddressFromApi({
    args: {
      apiUrl,
      chainName,
    },
  })

  return getVersionControlQueryClient({
    args: { cosmWasmClient, versionControlAddress },
  })
}
