import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../../codegen/abstract'
import { getAnsHostAddressFromApi } from '../../ans/get-ans-host-address-from-api'

export async function getAnsHostQueryClientFromApi(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const chainId = await cosmWasmClient.getChainId()

  const ansHostAddress = await getAnsHostAddressFromApi(apiUrl, chainId)

  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
