import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryClient } from '../../../codegen/abstract'
import { getAccountFactoryAddressFromApi } from '../../account-factory/get-account-factory-address-from-api'

export async function getAccountFactoryClientFromApi(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const factoryAddress = await getAccountFactoryAddressFromApi(apiUrl, chainId)

  return new AccountFactoryClient(cosmWasmClient, sender, factoryAddress)
}
