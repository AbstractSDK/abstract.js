import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export type GetAnsHostQueryClientFromApiParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getAnsHostQueryClientFromApi({
  args: { cosmWasmClient, apiUrl },
}: GetAnsHostQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()

  const ansHostAddress = await getAnsHostAddressFromApi({
    args: { apiUrl, chainId },
  })

  return getAnsHostQueryClient({ args: { cosmWasmClient, ansHostAddress } })
}
