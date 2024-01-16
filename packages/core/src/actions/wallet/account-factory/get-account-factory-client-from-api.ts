import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromApi } from '../../account-factory/get-account-factory-address-from-api'
import { getAccountFactoryClient } from './get-account-factory-client'

export async function getAccountFactoryClientFromApi(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const factoryAddress = await getAccountFactoryAddressFromApi(apiUrl, chainId)

  return getAccountFactoryClient(cosmWasmClient, sender, factoryAddress)
}
