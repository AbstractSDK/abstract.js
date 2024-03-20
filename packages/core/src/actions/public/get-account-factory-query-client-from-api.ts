import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getAccountFactoryAddressFromApi } from '../get-account-factory-address-from-api'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export type GetAccountFactoryQueryClientFromApiParameters = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountFactoryQueryClientFromApi({
  cosmWasmClient,
  apiUrl,
}: GetAccountFactoryQueryClientFromApiParameters) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const accountFactoryAddress = await getAccountFactoryAddressFromApi({
    apiUrl,
    chainName,
  })

  return getAccountFactoryQueryClient({
    cosmWasmClient,
    accountFactoryAddress,
  })
}
