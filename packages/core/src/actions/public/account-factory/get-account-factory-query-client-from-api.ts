import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromApi } from '../../account-factory/get-account-factory-address-from-api'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export async function getAccountFactoryQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const factoryAddress = await getAccountFactoryAddressFromApi(apiUrl, chainId)

  return getAccountFactoryQueryClient(cosmWasmClient, factoryAddress)
}
