import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { getAnsHostAddressFromVersionControl } from '../public/get-ans-host-address-from-version-control'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromVersionControlParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
  version?: string
}>

export async function getAnsHostClientFromVersionControl({
  args: { signingCosmWasmClient, sender, versionControlAddress, version },
}: GetAnsHostClientFromVersionControlParameters) {
  const ansHostAddress = await getAnsHostAddressFromVersionControl({
    args: {
      cosmWasmClient: signingCosmWasmClient,
      versionControlAddress,
      version,
    },
  })

  return getAnsHostClient({
    args: { signingCosmWasmClient, sender, ansHostAddress },
  })
}
