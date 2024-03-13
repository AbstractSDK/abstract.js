import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { chainIdToName } from '../../utils/chain-registry'
import { getAccountFactoryAddressFromApi } from '../get-account-factory-address-from-api'
import { getAccountFactoryClient } from './get-account-factory-client'

export type GetAccountFactoryClientFromApiParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}

export async function getAccountFactoryClientFromApi({
  signingCosmWasmClient,
  apiUrl,
  sender,
}: GetAccountFactoryClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const factoryAddress = await getAccountFactoryAddressFromApi({
    apiUrl,
    chainName,
  })

  return getAccountFactoryClient({
    signingCosmWasmClient,
    sender,
    factoryAddress,
  })
}
