import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { chainIdToName } from '../../utils/chain-registry'
import { getAccountFactoryAddressFromApi } from '../get-account-factory-address-from-api'
import { getAccountFactoryClient } from './get-account-factory-client'

export type GetAccountFactoryClientFromApiParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function getAccountFactoryClientFromApi({
  args: { signingCosmWasmClient, apiUrl, sender },
}: GetAccountFactoryClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const factoryAddress = await getAccountFactoryAddressFromApi({
    args: { apiUrl, chainName },
  })

  return getAccountFactoryClient({
    args: { signingCosmWasmClient, sender, factoryAddress },
  })
}
