import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAnsHostAddressFromApi } from '../get-ans-host-address-from-api'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromApiParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function getAnsHostClientFromApi({
  args: { signingCosmWasmClient, apiUrl, sender },
}: GetAnsHostClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const ansHostAddress = await getAnsHostAddressFromApi({
    args: { apiUrl, chainId },
  })

  return getAnsHostClient({
    args: { signingCosmWasmClient, sender, ansHostAddress },
  })
}
