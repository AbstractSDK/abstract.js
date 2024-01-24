import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { chainIdToName } from '../../utils/chain-registry'
import { getAccountFactoryAddressFromApi } from '../get-account-factory-address-from-api'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export type GetAccountFactoryQueryClientFromApiParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getAccountFactoryQueryClientFromApi({
  args: { cosmWasmClient, apiUrl },
}: GetAccountFactoryQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const accountFactoryAddress = await getAccountFactoryAddressFromApi({
    args: { apiUrl, chainName },
  })

  return getAccountFactoryQueryClient({
    args: { cosmWasmClient, accountFactoryAddress },
  })
}
