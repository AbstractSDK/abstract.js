import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
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
  const accountFactoryAddress = await getAccountFactoryAddressFromApi({
    args: { apiUrl, chainId },
  })

  return getAccountFactoryQueryClient({
    args: { cosmWasmClient, accountFactoryAddress },
  })
}
