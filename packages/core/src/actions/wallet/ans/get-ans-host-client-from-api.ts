import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostClient } from '../../../codegen/abstract'
import { getAnsHostAddressFromApi } from '../../ans/get-ans-host-address-from-api'

export async function getAnsHostClientFromApi(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const chainId = await cosmWasmClient.getChainId()
  const ansHostAddress = await getAnsHostAddressFromApi(apiUrl, chainId)

  return new AnsHostClient(cosmWasmClient, sender, ansHostAddress)
}
