import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
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
  const versionControlAddress = await getVersionControlAddressFromApi({
    args: {
      apiUrl,
      chainId,
    },
  })

  return getVersionControlQueryClient({
    args: { cosmWasmClient, versionControlAddress },
  })
}
