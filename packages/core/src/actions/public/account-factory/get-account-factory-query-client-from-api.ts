import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryQueryClient } from '../../../codegen/abstract'
import { getAccountFactoryAddressFromApi } from '../../account-factory/get-account-factory-address-from-api'

export async function getAccountFactoryQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const factoryAddress = await getAccountFactoryAddressFromApi(apiUrl, chainId)

  return new AccountFactoryQueryClient(cosmWasmClient, factoryAddress)
}
