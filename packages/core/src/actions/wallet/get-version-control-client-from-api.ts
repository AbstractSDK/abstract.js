import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getVersionControlClient } from './get-version-control-client'

export type GetVersionControlClientFromApiParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function getVersionControlClientFromApi({
  args: { signingCosmWasmClient, apiUrl, sender },
}: GetVersionControlClientFromApiParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const versionControlAddress = await getVersionControlAddressFromApi({
    args: {
      apiUrl,
      chainId,
    },
  })

  return getVersionControlClient({
    args: { signingCosmWasmClient, sender, versionControlAddress },
  })
}
